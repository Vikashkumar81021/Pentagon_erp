import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const createJobApplication = async (data, file) => {
  const hiringRequirement = await prisma.hiringRequirement.findUnique({
    where: {
      id: data.hiringRequirementId,
    },
  });
  if (!hiringRequirement) {
    throw new BadRequestError("Hiring Requirement not found");
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

  return application;
};

const getJobApplications = async () => {
  const application = await prisma.jobApplication.findMany({
    // where: {
    //   id: Number(id),
    // },
    // select: {
    //   cvUrl: true,
    // },
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

const updateJobApplicationSelection = async (id, selected) => {
  const application = await prisma.jobApplication.findUnique({
    where: { id: Number(id) },
  });

  if (!application) {
    throw new BadRequestError("Job Application not found");
  }

  return await prisma.jobApplication.update({
    where: { id: Number(id) },
    data: { selected },
  });
};

const getJobApplicationsBySelection = async (selected) => {
  const applications = await prisma.jobApplication.findMany({
    where: {
      selected: selected,
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

  await prisma.jobApplication.delete({
    where: {
      id: Number(id),
    },
  });

  return {
    message: "Job Application deleted successfully",
  };
};

export {
  createJobApplication,
  getJobApplications,
  getJobApplicationCv,
  updateJobApplicationSelection,
  getJobApplicationsBySelection,
  deleteJobApplication,
};
