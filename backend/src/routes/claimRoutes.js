import express from "express";
import {
  triggerClaim,
  getClaims,
  getClaimsByUserId,
} from "../controllers/claimController.js";

const router = express.Router();

router.post("/trigger", triggerClaim);
router.get("/", getClaims);
router.get("/:userId", getClaimsByUserId);

export default router;