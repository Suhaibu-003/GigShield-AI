import Policy from "../models/Policy.js";
import { policies } from "../data/mockData.js";

export const createPolicy = (req, res) => {
  try {
    const { userId, name, price, coverage, features } = req.body;

    if (!userId || !name || !price || !coverage) {
      return res.status(400).json({
        success: false,
        message: "Required policy fields are missing",
      });
    }

    const newPolicy = new Policy({
      id: Date.now(),
      userId,
      name,
      price,
      coverage,
      features: features || [],
    });

    policies.push(newPolicy);

    return res.status(201).json({
      success: true,
      message: "Policy created successfully",
      policy: newPolicy,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating policy",
    });
  }
};

export const getPolicies = (req, res) => {
  return res.status(200).json({
    success: true,
    count: policies.length,
    policies,
  });
};

export const getPolicyByUserId = (req, res) => {
  const { userId } = req.params;

  const userPolicy = policies.find(
    (policy) => String(policy.userId) === String(userId)
  );

  if (!userPolicy) {
    return res.status(404).json({
      success: false,
      message: "Policy not found for this user",
    });
  }

  return res.status(200).json({
    success: true,
    policy: userPolicy,
  });
};