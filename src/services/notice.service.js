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
const deleteNotice = async (id) => {
  return await prisma.notice.delete({
    where: {
      id: Number(id),
    },
  });
};
export  {createNotice, fetchNotices, deleteNotice};