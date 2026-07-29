import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createChartAccount = async (data) => {
  return await prisma.chartAccount.create({
    data: {
      code: data.code,
      accountName: data.accountName,
      classification: data.classification,
      subClassification: data.subClassification,
      balanceType: data.balanceType,
      openingBalance: data.openingBalance,
      status: data.status,
      description: data.description,
    },
  });
};

const getAllChartAccounts = async () => {
  return await prisma.chartAccount.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getChartAccountById = async (id) => {
  const account = await prisma.chartAccount.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!account) {
    throw new NotFoundError("Chart Account not found");
  }

  return account;
};

const getChartByAccount = async (account) => {
  return await prisma.chartAccount.findMany({
   select:{
  balanceType:true,
  accountName:true
   },
    orderBy: {
      id: "desc",
    },
  });
};

const updateChartAccount = async (id, data) => {
  const account = await prisma.chartAccount.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!account) {
    throw new NotFoundError("Chart Account not found");
  }

  return await prisma.chartAccount.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.code && { code: data.code }),
      ...(data.accountName && { accountName: data.accountName }),
      ...(data.classification && {
        classification: data.classification,
      }),
      ...(data.subClassification && {
        subClassification: data.subClassification,
      }),
      ...(data.balanceType && {
        balanceType: data.balanceType,
      }),
      ...(data.openingBalance !== undefined && {
        openingBalance: data.openingBalance,
      }),
      ...(data.status && {
        status: data.status,
      }),
      ...(data.description !== undefined && {
        description: data.description,
      }),
    },
  });
};

const deleteChartAccount = async (id) => {
  const account = await prisma.chartAccount.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!account) {
    throw new NotFoundError("Chart Account not found");
  }

  await prisma.chartAccount.delete({
    where: {
      id: Number(id),
    },
  });

  return account;
};

export {
  createChartAccount,
  getAllChartAccounts,
  getChartAccountById,
  getChartByAccount,
  updateChartAccount,
  deleteChartAccount,
};