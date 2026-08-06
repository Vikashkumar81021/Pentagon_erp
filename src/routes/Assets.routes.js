import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createAssetController,
    getAllAssetsController,
    getAssetByIdController,
    updateAssetController,
    deleteAssetController,
} from "../controllers/Assets.controller.js";

const router = express.Router();

router.post("/createAssets", authMiddleware, createAssetController);
router.get("/fetchAllAssets", authMiddleware, getAllAssetsController);
router.get("/fetchAssets/:id", authMiddleware, getAssetByIdController);
router.patch("/updateAssets/:id", authMiddleware, updateAssetController);
router.delete("/deleteAssets/:id", authMiddleware, deleteAssetController);

export default router;