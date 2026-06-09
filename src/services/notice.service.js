import prisma from "../config/db.js";

const createNotice = async (noticeData) => {
    const notice = await prisma.notice.create({
        data: noticeData,
    });
    return notice;
};
const fetchNotices = async () => {
    const notices = await prisma.notice.findMany({
        orderBy: {
            createdAt: "desc",
        },  
    });
   
    
    return notices;
};
export  {createNotice, fetchNotices};