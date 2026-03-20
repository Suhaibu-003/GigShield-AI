import Claim from "../models/Claim.js";
import { claims } from "../data/mockData.js";
import { getTriggerByType } from "../services/triggerService.js";
import { processPayout } from "../services/payoutService.js";

export const triggerClaim = (req, res) => {
  try {
    const { userId, triggerType } = req.body;

    if (!userId || !triggerType) {
      return res.status(400).json({
        success: false,
        message: "userId and triggerType are required",
      });
    }

    const trigger = getTriggerByType(triggerType);

    if (!trigger) {
      return res.status(404).json({
        success: false,
        message: "Invalid trigger type",
      });
    }

    const newClaim = new Claim({
      id: Date.now(),
      userId,
      triggerType: trigger.type,
      amount: trigger.payout,
      description: trigger.description,
    });

    claims.push(newClaim);

    const payout = processPayout(trigger.payout);

    return res.status(201).json({
      success: true,
      message: "Claim auto-approved and payout processed",
      claim: newClaim,
      payout,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while triggering claim",
    });
  }
};

export const getClaims = (req, res) => {
  return res.status(200).json({
    success: true,
    count: claims.length,
    claims,
  });
};

export const getClaimsByUserId = (req, res) => {
  const { userId } = req.params;

  const userClaims = claims.filter(
    (claim) => String(claim.userId) === String(userId)
  );

  return res.status(200).json({
    success: true,
    count: userClaims.length,
    claims: userClaims,
  });
};