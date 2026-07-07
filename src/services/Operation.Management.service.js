import { id } from "zod/v4/locales";
import prisma from "../config/db.js";

const getPayrollService = async (empid) => {
  const employee = await prisma.employee.findUnique({
    where:{
        id: Number(empid)
    },
     select: {
        id: true,
        full_name: true,
        email: true,
        desgination: true,
        department: true,
        salary: true,
        status_desgnation: true,
        Bank_instutuion: true,
        pan_id_card_number: true,
        aadhard_card_number: true,
        bank_account_number: true,
      },
  })
  return employee
};

export {
    getPayrollService,
};