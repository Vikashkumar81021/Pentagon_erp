import express from "express";
import {getClientAccountController} from "../controllers/client.controller.js";

const router = express.Router();

router.get("/account", getClientAccountController);
export default router;