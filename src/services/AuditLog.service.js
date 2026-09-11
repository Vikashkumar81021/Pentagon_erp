import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createAuditLog = async (data) => {
  return await prisma.auditLog.create({
    data: {
      userId: data.userId ? Number(data.userId) : null,
      action: data.action,
      module: data.module,
      activity: data.activity,
    },
  });
};

const getAuditLogs = async () => {
  return await prisma.auditLog.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const getAuditLogById = async (id) => {
  const auditLog = await prisma.auditLog.findUnique({
    where: { id: Number(id) },
  });

  if (!auditLog) {
    throw new BadRequestError("Audit Log not found");
  }

  return auditLog;
};

const updateAuditLog = async (id, data) => {
  const auditLog = await prisma.auditLog.findUnique({
    where: { id: Number(id) },
  });

  if (!auditLog) {
    throw new BadRequestError("Audit Log not found");
  }

  return await prisma.auditLog.update({
    where: { id: Number(id) },
    data: {
      ...(data.userId !== undefined && {
        userId: data.userId ? Number(data.userId) : null,
      }),
      ...(data.action !== undefined && { action: data.action }),
      ...(data.module !== undefined && { module: data.module }),
      ...(data.activity !== undefined && { activity: data.activity }),
    },
  });
};

const deleteAuditLog = async (id) => {
  const auditLog = await prisma.auditLog.findUnique({
    where: { id: Number(id) },
  });

  if (!auditLog) {
    throw new BadRequestError("Audit Log not found");
  }

  return await prisma.auditLog.delete({
    where: { id: Number(id) },
  });
};

export {
  createAuditLog,
  getAuditLogs,
  getAuditLogById,
  updateAuditLog,
  deleteAuditLog,
};