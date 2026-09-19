import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import{
  createUserValidator,
  updateUserValidator,
} from "../validators/user.validator.js";
import {
    createUserService,
    getUsersService,
    updateUserService,
    deleteUserService,
} from "../services/user.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createUserController = asyncHandler(async (req, res) => {
  const validateData = createUserValidator.parse(req.body);
    
  const user = await createUserService(validateData);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "USER",
      activity: "User created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

const getUsersController = asyncHandler(async (req, res) => {
  const users = await getUsersService();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "USER",
      activity: "User fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: users,
  });
});

const updateUserController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const validateData = updateUserValidator.parse(req.body);
  const user = await updateUserService(Number(id), validateData);

  await createAuditLog({
      userId: req.user.id,
      action: "PUT",
      module: "USER",
      activity: "User updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});

const deleteUserController = asyncHandler(async (req, res) => {
  await deleteUserService(Number(req.params.id));

  await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "USER",
      activity: "User deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "User deleted successfully",
  });
});

export{
    createUserController,
    getUsersController,
    updateUserController,
    deleteUserController,
};