import { STATUS_CODE } from "../constants/status.code.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
} from "../services/Assets.service.js";

const createAssetController = async (req, res, next) => {
  try {
    const asset = await createAsset(req.body);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Asset created successfully",
      data: asset,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAssetsController = async (req, res, next) => {
  try {
    const assets = await getAllAssets();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: assets.length,
      data: assets,
    });
  } catch (error) {
    next(error);
  }
};

const getAssetByIdController = async (req, res, next) => {
  try {
    const asset = await getAssetById(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      data: asset,
    });
  } catch (error) {
    next(error);
  }
};

const updateAssetController = async (req, res, next) => {
  try {
    const asset = await updateAsset(req.params.id, req.body);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Asset updated successfully",
      data: asset,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAssetController = async (req, res, next) => {
  try {
    await deleteAsset(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Asset deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  createAssetController,
  getAllAssetsController,
  getAssetByIdController,
  updateAssetController,
  deleteAssetController,
};