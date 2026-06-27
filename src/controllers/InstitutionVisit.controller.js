import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createInstitutionVisit,
  getInstitutionVisits,
} from "../services/InstitutionVisit.service.js";

const createInstitutionVisitController = asyncHandler(async (req, res) => {
  const institutionVisit = await createInstitutionVisit(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Institution Visit created successfully",
    data: institutionVisit,
  });
});

const getInstitutionVisitsController = asyncHandler(async (req, res) => {
  const institutionVisits = await getInstitutionVisits();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Institution Visits fetched successfully",
    data: institutionVisits,
  });
});

export {createInstitutionVisitController, getInstitutionVisitsController};