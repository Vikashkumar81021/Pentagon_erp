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
import { createAuditLog } from "../services/AuditLog.service.js";

const createInstitutionVisitController = asyncHandler(async (req, res) => {
  const validateData = createInstitutionVisitValidator.parse(req.body);
  const institutionVisit = await createInstitutionVisit(validateData);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "INSTITUTION_VISIT",
      activity: "Institution Visit created successfully",
    });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Institution Visit created successfully",
    data: institutionVisit,
  });
});

const getInstitutionVisitsController = asyncHandler(async (req, res) => {
  const institutionVisits = await getInstitutionVisits();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "INSTITUTION_VISIT",
      activity: "Institution Visit fetched successfully",
    });

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

  await createAuditLog({
      userId: req.user.id,
      action: "PUT",
      module: "INSTITUTION_VISIT",
      activity: "Institution Visit updated successfully",
    });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Institution Visit updated successfully",
    data: institutionVisit,
  });
});

const deleteInstitutionVisitController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteInstitutionVisit(id);

  await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "INSTITUTION_VISIT",
      activity: "Institution Visit deleted successfully",
    });

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
