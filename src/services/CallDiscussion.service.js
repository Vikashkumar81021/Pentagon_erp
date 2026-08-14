import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createCallDiscussion = async (data) => {
  const salesVisit = await prisma.salesVisit.findUnique({
    where: {
      id: Number(data.sales_visit_id),
    },
  });

  if (!salesVisit) {
    throw new NotFoundError("Sales Visit not found");
  }

  return await prisma.callDiscussion.create({
    data: {
      sales_visit_id: Number(data.sales_visit_id),
      call_date: data.call_date,
      call_time: data.call_time,
      call_type: data.call_type,
      duration: Number(data.duration),
      discussion: data.discussion,
      requirement: data.requirement,
      solution: data.solution,
      outcome: data.outcome,
      expected_amount: Number(data.expected_amount),
      next_followup_date: data.next_followup_date,
      followup_mode: data.followup_mode,
      remarks: data.remarks,
    },
    include: {
      salesVisit: true,
    },
  });
};

const getAllCallDiscussions = async () => {
  return await prisma.callDiscussion.findMany({
    include: {
      salesVisit: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const deleteCallDiscussion = async (id) => {
  const callDiscussion = await prisma.callDiscussion.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!callDiscussion) {
    throw new NotFoundError("Call Discussion not found");
  }

  await prisma.callDiscussion.delete({
    where: {
      id: Number(id),
    },
  });

  return callDiscussion;
};

export{
    createCallDiscussion,
    getAllCallDiscussions,
    deleteCallDiscussion,
}