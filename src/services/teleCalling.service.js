import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createTelecalling = async (data) => {
  return await prisma.telecalling.create({
    data: {
      executive_name: data.executive_name,
      visit_date: data.visit_date,
      customer_name: data.customer_name,
      contact_person: data.contact_person,
      contact_number: data.contact_number,
      customer_email: data.customer_email,
      city: data.city,
      lead_priority: data.lead_priority,
      remarks: data.remarks,
    },
  });
};

const getAllTelecalling = async () => {
  return await prisma.telecalling.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};


const updateTelecalling = async (id, data) => {
  const telecalling = await prisma.telecalling.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!telecalling) {
    throw new NotFoundError("Telecalling not found");
  }

  return await prisma.telecalling.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.executive_name && {
        executive_name: data.executive_name,
      }),
      ...(data.visit_date && {
        visit_date: data.visit_date,
      }),
      ...(data.customer_name && {
        customer_name: data.customer_name,
      }),
      ...(data.contact_person && {
        contact_person: data.contact_person,
      }),
      ...(data.contact_number && {
        contact_number: data.contact_number,
      }),
      ...(data.customer_email && {
        customer_email: data.customer_email,
      }),
      ...(data.city && {
        city: data.city,
      }),
      ...(data.lead_priority && {
        lead_priority: data.lead_priority,
      }),
      ...(data.remarks && {
        remarks: data.remarks,
      }),
    },
  });
};

const deleteTelecalling = async (id) => {
  const telecalling = await prisma.telecalling.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!telecalling) {
    throw new NotFoundError("Telecalling not found");
  }

  await prisma.telecalling.delete({
    where: {
      id: Number(id),
    },
  });

  return telecalling;
};

export {
  createTelecalling,
  getAllTelecalling,
  updateTelecalling,
  deleteTelecalling,
};