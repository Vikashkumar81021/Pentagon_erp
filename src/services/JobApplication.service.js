import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";

const createJobApplication = async (data, file) => {
  const hiringRequirement = await prisma.hiringRequirement.findUnique({
    where: {
      id: data.hiringRequirementId,
    },
  });
  if (!hiringRequirement) {
    throw new BadRequestError("Hiring Requirement not found");
  }
  const existingApplication = await prisma.jobApplication.findFirst({
    where: {
      email: data.email,
      hiringRequirementId: data.hiringRequirementId,
    },
  });
  if (existingApplication) {
    throw new BadRequestError("You have already applied for this job");
  }
  let cvUrl = null;
  if (file) {
    const uploadResult = await uploadToCloudinary(
      file.buffer,
      "job-applications/cv",
      file.originalname,
    );

    cvUrl = uploadResult.secure_url;
  }

  const application = await prisma.jobApplication.create({
    data: {
      hiringRequirementId: data.hiringRequirementId,

      candidateName: data.candidateName,

      email: data.email,

      mobile: data.mobile,

      cvUrl,
    },

    include: {
      hiringRequirement: true,
    },
  });
  if (application.email) {
    throw new BadRequestError("");
  }
  return application;
};

const getJobApplications = async () => {
  const application = await prisma.jobApplication.findMany({
    // where: {
    //   id: Number(id),
    // },
    include: {
      hiringRequirement: true,
    },
  });

  // if (!application) {
  //   throw new BadRequestError("Job application not found");
  // }

  // if (!application.cvUrl) {
  //   throw new BadRequestError("CV not found");
  // }

  return application;
};
const getJobApplicationCv = async (id) => {
  const application = await prisma.jobApplication.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      cvUrl: true,
    },
  });

  if (!application) {
    throw new BadRequestError("Job application not found");
  }

  if (!application.cvUrl) {
    throw new BadRequestError("CV not found");
  }

  return application.cvUrl;
};

const updateJobApplicationSelection = async (id, status) => {
  const application = await prisma.jobApplication.findUnique({
    where: { id: Number(id) },
  });

  if (!application) {
    throw new BadRequestError("Job Application not found");
  }

  return await prisma.jobApplication.update({
    where: { id: Number(id) },
    data: { status },
  });
};

const getJobApplicationsBySelection = async (status) => {
  const applications = await prisma.jobApplication.findMany({
    where: {
      status: status,
    },
    include: {
      hiringRequirement: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });
  return applications;
};

const deleteJobApplication = async (id) => {
  const application = await prisma.jobApplication.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!application) {
    throw new BadRequestError("Job Application not found");
  }

  if (application.cvUrl) {
    try {
      const url = new URL(application.cvUrl);
      const parts = url.pathname.split("/");

      const uploadIndex = parts.indexOf("upload");

      if (uploadIndex !== -1) {
        let publicIdParts = parts.slice(uploadIndex + 1);

        if (/^v\d+$/.test(publicIdParts[0])) {
          publicIdParts.shift();
        }

        const publicIdWithExtension = publicIdParts.join("/");

        const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, "");

        await cloudinary.uploader.destroy(publicId, {
          resource_type: "raw",
        });
      }
    } catch (error) {
      console.error("CV delete failed:", error.message);
    }
  }

  await prisma.jobApplication.delete({
    where: {
      id: Number(id),
    },
  });

  return {
    message: "Job Application and CV deleted successfully",
  };
};

const getJobApplicationsByBackGroundCheck = async (status) => {
  const applications = await prisma.jobApplication.findMany({
    where: {
      status: "BACKGROUND_CHECK",
    },
    include: {
      hiringRequirement: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });
  return applications;
};

const getJobApplicationsByHired = async (status) => {
  const applications = await prisma.jobApplication.findMany({
    where: {
      status: "HIRED",
    },
    include: {
      hiringRequirement: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });
  return applications;
};

export {
  createJobApplication,
  getJobApplications,
  getJobApplicationCv,
  updateJobApplicationSelection,
  getJobApplicationsBySelection,
  deleteJobApplication,
  getJobApplicationsByBackGroundCheck,
  getJobApplicationsByHired,
};
