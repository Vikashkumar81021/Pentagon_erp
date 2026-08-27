// import express from "express";

// import {
//   createHiringRequirementController,
//   getHiringRequirementController,
//   getHiringRequirementByIdController,
//   updateHiringRequirementController,
//   deleteHiringRequirementController,
//   searchHiringRequirementController,
//   getOpenHiringRequirementsController,
// } from "../controllers/HiringRequirement.controller.js";

// const router = express.Router();

// router.post("/hiring/create", createHiringRequirementController);
// router.get("/fetchhiring", getHiringRequirementController);
// router.get("/hiringId/:id", getHiringRequirementByIdController);
// router.put("/hiring/:id", updateHiringRequirementController);
// router.delete("/hiring/:id", deleteHiringRequirementController);
// router.get("/hiring/search", searchHiringRequirementController);
// router.get("/fetchOpenHiringRequirement", getOpenHiringRequirementsController);

// export default router;
import express from "express";

import {
  createHiringRequirementController,
  getHiringRequirementController,
  getHiringRequirementByIdController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
  searchHiringRequirementController,
  getOpenHiringRequirementsController,
} from "../controllers/HiringRequirement.controller.js";

const router = express.Router();

router.post("/hiring/create", createHiringRequirementController);

router.get("/fetchhiring", getHiringRequirementController);
router.get("/hiringId/:id", getHiringRequirementByIdController);
router.put("/hiring/:id", updateHiringRequirementController);
router.delete("/hiring/:id", deleteHiringRequirementController);
router.get("/hiring/search", searchHiringRequirementController);
router.get("/fetchOpenHiringRequirement", getOpenHiringRequirementsController);

export default router;
