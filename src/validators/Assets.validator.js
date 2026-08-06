import { z } from "zod";

export const assetSchema = z.object({
  asset: z.string().min(1, "Asset is required"),

  category: z.string().min(1, "Category is required"),

  department: z.string().min(1, "Department is required"),

  asset_value: z.string().min(1, "Asset Value is required"),

  depreciation: z.string().min(1, "Depreciation is required"),

  status: z.string().min(1, "Status is required"),
});

export const updateAssetSchema = assetSchema.partial();