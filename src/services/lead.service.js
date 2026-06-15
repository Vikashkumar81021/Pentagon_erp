import prisma from "../config/db.js";

const createLead = async (leadData) => {
  const lead = await prisma.lead.create({
    data: leadData,
  });

  return lead;
};
const fetchLeads = async () => {
  const leads = await prisma.lead.findMany({
    where: {
      status: {
        not: "Converted",
      },
    },
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
      status: "Converted",
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
  return prisma.$transaction(async (tx) => {
    const lead = await tx.lead.update({
      where: {
        id: Number(leadId),
      },
      data: {
        status: outcome,
      },
    });
    if (outcome === "Converted") {
      const existingClient = await tx.clientAccount.findFirst({
        where: {
          email: lead.email,
        },
      });

      if (!existingClient) {
        await tx.clientAccount.create({
          data: {
            organization_name: lead.organization_name,
            name_of_poc: lead.name_of_poc,
            email: lead.email,
            phoneNumber: lead.phoneNumber,
            city: lead.city,
            status: "ACTIVE",
            industry_sector: lead.industry_sector,
            designation: lead.designation,
            address: lead.address,
          },
        });
      }
    }

    return lead;
  });
};
export {
  createLead,
  fetchLeads,
  getConvertedLeads,
  discusionLead,
  actionConverted,
};
