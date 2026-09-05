import prisma from "../config/db.js";

const createSalesVisit = async (data) => {
  return await prisma.salesVisit.create({
    data: {
      executive_name: data.executive_name,
      reporting_location: data.reporting_location,
      visit_date: data.visit_date,
      activity_type: data.activity_type,
      visit_type: data.visit_type,
      customer_name: data.customer_name,
      contact_person: data.contact_person,
      contact_number: data.contact_number,
      city: data.city,
      client_type: data.client_type,
      lead_priority: data.lead_priority,
      discussion_summary: data.discussion_summary,
      current_status: data.current_status,
      expected_business_value: data.expected_business_value,
      proposal_sent: data.proposal_sent,
      order_closed: data.order_closed,
      order_lost_reason: data.order_lost_reason,
      expected_closure_date: data.expected_closure_date,
      next_followup_date: data.next_followup_date,
      management_support_required: data.management_support_required,
      additional_remarks: data.additional_remarks,
      meeting_photo: data.meeting_photo,
      userId: data.userId,
    },
  });
};

const getSalesVisits = async () => {
  return await prisma.salesVisit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const fetchclientname = async () => {
  return await prisma.salesVisit.findMany({
    select:{
      customer_name:true
    }
  })
}
const updateSalesVisitStatus = async (data) => {
  const salesVisit = await prisma.salesVisit.findUnique({
    where: { id: Number(data.id) },
  });

  if (!salesVisit) {
    throw new BadRequestError("Sales Visit not found");
  }

  return prisma.salesVisit.update({
    where: { id: Number(data.id) },
    data: {
      ...(data.status !== undefined && { status: data.status }),
      ...(data.reason !== undefined && { reason: data.reason }),
    },
  });
};

export {
  createSalesVisit,
  getSalesVisits,
  fetchclientname,
  updateSalesVisitStatus,
};
