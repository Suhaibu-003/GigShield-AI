import express from "express";
import {
  getRiskAssessment,
  getTriggers,
} from "../controllers/riskController.js";

const router = express.Router();

router.post("/calculate", getRiskAssessment);
router.get("/triggers", getTriggers);

export default router;