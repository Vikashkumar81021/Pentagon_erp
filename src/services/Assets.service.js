import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createAsset = async (data) => {
  const assetsId = `AST-${Date.now()}`;

  return await prisma.assets.create({
    data: {
      assetsId,
      asset: data.asset,
      category: data.category,
      department: data.department,
      asset_value: data.asset_value,
      depreciation: data.depreciation,
      status: data.status,
    },
  });
};

const getAllAssets = async () => {
  return await prisma.assets.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getAssetById = async (value) => {
  const asset = await prisma.assets.findFirst({
    where: {
      OR: [
        {
          id: isNaN(Number(value)) ? undefined : Number(value),
        },
        {
          assetsId: value,
        },
      ],
    },
  });

  if (!asset) {
    throw new NotFoundError("Asset not found");
  }

  return asset;
};

const updateAsset = async (id, data) => {
  const asset = await prisma.assets.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!asset) {
    throw new NotFoundError("Asset not found");
  }

  return await prisma.assets.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.asset && { asset: data.asset }),
      ...(data.category && { category: data.category }),
      ...(data.department && { department: data.department }),
      ...(data.asset_value && { asset_value: data.asset_value }),
      ...(data.depreciation && {
        depreciation: data.depreciation,
      }),
      ...(data.status && { status: data.status }),
    },
  });
};

const deleteAsset = async (id) => {
  const asset = await prisma.assets.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!asset) {
    throw new NotFoundError("Asset not found");
  }

  await prisma.assets.delete({
    where: {
      id: Number(id),
    },
  });

  return asset;
};

export {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
};