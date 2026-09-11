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
import { createAuditLog } from "../services/AuditLog.service.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";

const createTaskChecklistController = asyncHandler(async (req, res) => {
  const payload = createTaskChecklistValidator.parse(req.body);

  const task = await createTaskChecklist(payload);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "TASK_CHECKLIST",
      activity: "Tasklist created successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: task,
  });
});

const toggleTaskCheckListController = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const updateTask = await toggleTaskStatus(taskId);

  await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "TASK_CHECKLIST",
      activity: "Tasklist updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: updateTask,
  });
});
const getTaskChecklistController = asyncHandler(async (req, res) => {
  const tasks = await getTaskChecklist();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "TASK_CHECKLIST",
      activity: "Tasklist fetched successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "TASK_CHECKLIST",
      activity: "Tasklist fetched successfully",
  });

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

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "TASK_CHECKLIST",
      activity: "Tasklist fetched successfully",
  });

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
