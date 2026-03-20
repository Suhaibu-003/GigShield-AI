import { calculateRisk } from "../services/riskService.js";
import { getAllTriggers } from "../services/triggerService.js";

export const getRiskAssessment = (req, res) => {
  try {
    const { location, hours } = req.body;

    if (!location || hours === undefined) {
      return res.status(400).json({
        success: false,
        message: "location and hours are required",
      });
    }

    const risk = calculateRisk(location, Number(hours));

    return res.status(200).json({
      success: true,
      message: "Risk assessment generated successfully",
      risk,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while calculating risk",
    });
  }
};

export const getTriggers = (req, res) => {
  const triggers = getAllTriggers();

  return res.status(200).json({
    success: true,
    triggers,
  });
};