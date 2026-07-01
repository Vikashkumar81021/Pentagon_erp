import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createInstitutionVisitValidator,
  updateInstitutionVisitValidator,
} from "../validators/InstitutionVisit.validator.js";
import {
  createInstitutionVisit,
  getInstitutionVisits,
  updateInstitutionVisit,
  deleteInstitutionVisit,
} from "../services/InstitutionVisit.service.js";

const createInstitutionVisitController = asyncHandler(async (req, res) => {
  const validateData = createInstitutionVisitValidator.parse(req.body);
  const institutionVisit = await createInstitutionVisit(validateData);

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

const updateInstitutionVisitController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const validateData = updateInstitutionVisitValidator.parse(req.body);
  const institutionVisit = await updateInstitutionVisit(id, validateData);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Institution Visit updated successfully",
    data: institutionVisit,
  });
});

const deleteInstitutionVisitController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteInstitutionVisit(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Institution Visit deleted successfully",
  });
});

export {
  createInstitutionVisitController,
  getInstitutionVisitsController,
  updateInstitutionVisitController,
  deleteInstitutionVisitController,
};
