import { createTaskChecklistValidator } from "../validators/TaskChecklist.validator.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createTaskChecklist,
  getTaskChecklist,
} from "../services/TaskChecklist.service.js";

const createTaskChecklistController = asyncHandler(async (req, res) => {
  const payload = createTaskChecklistValidator.parse(req.body);

  const task = await createTaskChecklist(payload);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: task,
  });
});

const getTaskChecklistController = asyncHandler(async (req, res) => {
  const tasks = await getTaskChecklist();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: tasks,
  });
});

export { createTaskChecklistController, getTaskChecklistController };
