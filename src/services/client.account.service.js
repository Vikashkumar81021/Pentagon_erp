import prisma from "../config/db.js";

const getClientAccount = async (accountData) => {
    const lead = await prisma.ClientAccount.findMany();
    return lead;
};
export { getClientAccount };