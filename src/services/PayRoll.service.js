import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createPayroll = async (data) => {
  const employee = await prisma.employee.findUnique({
    where: {
      id: data.employeeId,
    },
   
  });


  if (!employee) {
    throw new NotFoundError("Employee not found");
  }

  return await prisma.payRoll.create({
    data: {
      employeeId: data.employeeId,
      gross: Number(data.gross),
      tds: Number(data.tds),
      pf: Number(data.pf),
      status: data.status,
    },
    include: {
      employee: true,
    },
  });
};

const getAllPayrolls = async () => {
  return await prisma.payRoll.findMany({
    include: {
      employee: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getPayrollById = async (id) => {
  const payroll = await prisma.payRoll.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      employee: true,
    },
  });

  if (!payroll) {
    throw new NotFoundError("Payroll not found");
  }

  return payroll;
};

const updatePayroll = async (id, data) => {
  const payroll = await prisma.payRoll.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!payroll) {
    throw new NotFoundError("Payroll not found");
  }

  return await prisma.payRoll.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.employeeId && {
        employeeId: data.employeeId,
      }),
      ...(data.gross !== undefined && {
        gross: Number(data.gross),
      }),
      ...(data.tds !== undefined && {
        tds: Number(data.tds),
      }),
      ...(data.pf !== undefined && {
        pf: Number(data.pf),
      }),
      ...(data.status && {
        status: data.status,
      }),
    },
    include: {
      employee: true,
    },
  });
};

const deletePayroll = async (id) => {
  const payroll = await prisma.payRoll.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!payroll) {
    throw new NotFoundError("Payroll not found");
  }

  await prisma.payRoll.delete({
    where: {
      id: Number(id),
    },
  });

  return payroll;
};

export{
    createPayroll,
    getAllPayrolls,
    getPayrollById,
    updatePayroll,
    deletePayroll
};