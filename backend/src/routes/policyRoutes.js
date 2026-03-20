import express from "express";
import {
  createPolicy,
  getPolicies,
  getPolicyByUserId,
} from "../controllers/policyController.js";

const router = express.Router();

router.post("/create", createPolicy);
router.get("/", getPolicies);
router.get("/:userId", getPolicyByUserId);

export default router;