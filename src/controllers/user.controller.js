import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
    createUserService,
    getUsersService,
    updateUserService,
    deleteUserService,
} from "../services/user.service.js";

const createUserController = asyncHandler(async (req, res) => {
    console.log("user",req.body);
    
  const user = await createUserService(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

const getUsersController = asyncHandler(async (req, res) => {
  const users = await getUsersService();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: users,
  });
});

const updateUserController = asyncHandler(async (req, res) => {
  const user = await updateUserService(Number(req.params.id), req.body);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});

const deleteUserController = asyncHandler(async (req, res) => {
  await deleteUserService(Number(req.params.id));

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