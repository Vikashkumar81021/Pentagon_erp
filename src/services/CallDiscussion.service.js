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

const updateCallDiscussion = async (id, data) => {
  const existing = await prisma.callDiscussion.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existing) {
    throw new NotFoundError("Call Discussion not found");
  }

  if (data.sales_visit_id !== undefined) {
    const salesVisit = await prisma.salesVisit.findUnique({
      where: {
        id: Number(data.sales_visit_id),
      },
    });

    if (!salesVisit) {
      throw new NotFoundError("Sales Visit not found");
    }
  }
  return await prisma.callDiscussion.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.sales_visit_id !== undefined && {
        sales_visit_id: Number(data.sales_visit_id),
      }),

      ...(data.call_date !== undefined && {
        call_date: data.call_date,
      }),

      ...(data.call_time !== undefined && {
        call_time: data.call_time,
      }),

      ...(data.call_type !== undefined && {
        call_type: data.call_type,
      }),

      ...(data.duration !== undefined && {
        duration: Number(data.duration),
      }),

      ...(data.discussion !== undefined && {
        discussion: data.discussion,
      }),

      ...(data.requirement !== undefined && {
        requirement: data.requirement,
      }),

      ...(data.solution !== undefined && {
        solution: data.solution,
      }),

      ...(data.outcome !== undefined && {
        outcome: data.outcome,
      }),

      ...(data.expected_amount !== undefined && {
        expected_amount: Number(data.expected_amount),
      }),

      ...(data.next_followup_date !== undefined && {
        next_followup_date: data.next_followup_date,
      }),

      ...(data.followup_mode !== undefined && {
        followup_mode: data.followup_mode,
      }),

      ...(data.remarks !== undefined && {
        remarks: data.remarks,
      }),
    },
    include: {
      salesVisit: true,
    },
  });
};

const updateCallDiscussionStatus = async (id, status) => {
  const callDiscussion = await prisma.callDiscussion.findUnique({
    where: { id: Number(id) },
  });

  if (!callDiscussion) {
    throw new BadRequestError("Call Discussion not found");
  }

  return await prisma.callDiscussion.update({
    where: { id: Number(id) },
    data: { status },
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
    updateCallDiscussion,
    updateCallDiscussionStatus,
    deleteCallDiscussion,
}