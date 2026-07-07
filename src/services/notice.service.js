import prisma from "../config/db.js";

const createNotice = async (noticeData) => {
    const notice = await prisma.notice.create({
        data: noticeData,
    });
    return notice;
};
const fetchNotices = async () => {
    const notices = await prisma.notice.findMany({
        take: 5,
        orderBy: {
            createdAt: "desc",
        },  
    });
   
    
    return notices;
};

const updateNotice = async (id, noticeData) => {
  const notice = await prisma.notice.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!notice) {
    throw new Error("Notice not found");
  }

  return await prisma.notice.update({
    where: {
      id: Number(id),
    },
    data: noticeData,
  });
};

const deleteNotice = async (id) => {
  return await prisma.notice.delete({
    where: {
      id: Number(id),
    },
  });
};

const fetchNoticesByType = async (type) => {
  return await prisma.notice.findMany({
    where: {
      type,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
export  {createNotice, fetchNotices, updateNotice, deleteNotice, fetchNoticesByType};