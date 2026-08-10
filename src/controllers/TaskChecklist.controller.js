import { createTaskChecklistValidator } from "../validators/TaskChecklist.validator.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createTaskChecklist,
  getTaskChecklist,
  toggleTaskStatus,
  getTaskChecklistByEmployee,
  getRecentPendingChecklist,
} from "../services/TaskChecklist.service.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";
const createTaskChecklistController = asyncHandler(async (req, res) => {
  const payload = createTaskChecklistValidator.parse(req.body);

  const task = await createTaskChecklist(payload);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: task,
  });
});

const toggleTaskCheckListController = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const updateTask = await toggleTaskStatus(taskId);
  console.log("updateTask", updateTask);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: updateTask,
  });
});
const getTaskChecklistController = asyncHandler(async (req, res) => {
  const tasks = await getTaskChecklist();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: tasks,
  });
});

const getTaskChecklistByEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const data = await getTaskChecklistByEmployee(id);

    res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Task checklist fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getRecentPendingChecklistController = asyncHandler(async (req, res) => {
  const data = await getRecentPendingChecklist();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: serializeBigInt(data),
  });
});
export {
  createTaskChecklistController,
  getTaskChecklistController,
  toggleTaskCheckListController,
  getTaskChecklistByEmployeeController,
  getRecentPendingChecklistController,
};
