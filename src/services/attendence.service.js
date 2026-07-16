import soap from "soap";
import prisma from "../config/db.js";

export const syncAttendanceService = async () => {
  try {
    const wsdl = "http://www.esslcloud.com/pentagon/webapiservice.asmx?WSDL";

    const client = await soap.createClientAsync(wsdl);

    const now = new Date();
    const from = new Date(now.getTime() - 60 * 1000);

    const args = {
      FromDateTime: from.toISOString().slice(0, 19).replace("T", " "),
      ToDateTime: now.toISOString().slice(0, 19).replace("T", " "),
      SerialNumber: "",
      UserName: process.env.ATTENDENCE_API_URL_USER_KEY,
      UserPassword: process.env.ATTENDENCE_API_URL_PASSWORD,
      strDataList: "",
    };

    const [response] = await client.GetTransactionsLogAsync(args);

    if (!response.strDataList) {
      return {
        success: true,
        message: "No Attendance Found",
      };
    }

    const attendance = response.strDataList
      .trim()
      .split("\n")
      .map((row) => {
        const [employeeCode, date, time, punchType] = row.trim().split(/\s+/);

        return {
          employeeCode,
          punch_time: new Date(`${date} ${time}`),
          punch_type: punchType.toUpperCase(),
        };
      });

    for (const item of attendance) {
      const employee = await prisma.employee.findUnique({
        where: {
          employeeCode: item.employeeCode,
        },
      });

      if (!employee) continue;

      const val = await prisma.attendanceLog.upsert({
        where: {
          employeeCode_punch_time: {
            employeeCode: item.employeeCode,
            punch_time: item.punch_time,
          },
        },
        update: {},
        create: item,
      });
      console.log("insert", val);
    }

    return {
      success: true,
      message: "Attendance Synced Successfully",
      count: attendance.length,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAttendanceService = async () => {
  return await prisma.attendanceLog.findMany({
    include: {
      empolyee: true,
    },
    orderBy: {
      punch_time: "desc",
    },
  });
};
