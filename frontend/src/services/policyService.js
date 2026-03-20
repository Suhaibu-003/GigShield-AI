import { postRequest, getRequest } from "./api";

export async function savePolicy(policyData) {
  const response = await postRequest("/policy/create", policyData);

  if (response.success) {
    localStorage.setItem("gig_policy", JSON.stringify(response.policy));
    return response.policy;
  }

  throw new Error(response.message || "Policy creation failed");
}

export async function fetchPolicyByUserId(userId) {
  const response = await getRequest(`/policy/${userId}`);

  if (response.success) {
    localStorage.setItem("gig_policy", JSON.stringify(response.policy));
    return response.policy;
  }

  return null;
}

export function getPolicy() {
  const saved = localStorage.getItem("gig_policy");
  return saved ? JSON.parse(saved) : null;
}