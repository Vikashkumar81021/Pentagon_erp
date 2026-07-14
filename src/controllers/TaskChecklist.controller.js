import {createTaskChecklistValidator,} from "../validators/TaskChecklist.validator.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import {createTaskChecklist, getTaskChecklist,} from "../services/TaskChecklist.service.js";

const createTaskChecklistController = asyncHandler(async (req, res) => {
  const payload = createTaskChecklistValidator.parse(req.body);

  const task = await createTaskChecklist(payload);

  res.status(201).json({
    success: true,
    data: task,
  });
});

const getTaskChecklistController = asyncHandler(async (req, res) => {
  const tasks = await getTaskChecklist();

  res.status(200).json({
    success: true,
    data: tasks,
  });
});

export{createTaskChecklistController, getTaskChecklistController};