import express from "express";
import { largest } from "../controllers/data.controller";
const router = express.Router();

router.post("/search-data", largest);
export default router;
