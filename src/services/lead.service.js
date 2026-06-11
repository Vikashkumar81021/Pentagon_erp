import prisma from "../config/db.js";

const createLead = async (leadData) => {
  const lead = await prisma.lead.create({
    data: leadData,
  });

  return lead;
};
const fetchLeads = async () => {
  const leads = await prisma.lead.findMany({
    select: {
      id: true,
      organization_name: true,
      phoneNumber: true,
      email: true,
      attemptsCount: true,
      status: true,
    },
  });

  return leads;
};
const getConvertedLeads = async () => {
  const convertedLeads = await prisma.lead.findMany({
    where: {
      status: "converted",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return convertedLeads;
};

const discusionLead = async (leadId, durationSec, outcome, remarks) => {
  const discussLead = await prisma.$transaction(async (tx) => {
    await tx.leadActivity.create({
      data: {
        leadId: Number(leadId),
        type: "CALL",
        durationSec,
        outcome,
        remarks,
      },
    });

    await tx.lead.update({
      where: {
        id: Number(leadId),
      },
      data: {
        attemptsCount: {
          increment: 1,
        },
        status: outcome,
      },
    });
  });

  return discussLead;
};

const actionConverted = async (leadId, outcome) => {
  const actionData = await prisma.lead.update({
    where: {
      id: Number(leadId),
    },
    data: {
      status: outcome,
    },
  });

  return actionData;
};
export {
  createLead,
  fetchLeads,
  getConvertedLeads,
  discusionLead,
  actionConverted,
};
