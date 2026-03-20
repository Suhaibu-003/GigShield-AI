import { postRequest, getRequest } from "./api";

export async function createClaim(userId, triggerType) {
  const response = await postRequest("/claim/trigger", {
    userId,
    triggerType,
  });

  if (response.success) {
    const existing = getClaims();
    const updated = [response.claim, ...existing];
    localStorage.setItem("gig_claims", JSON.stringify(updated));
    return response;
  }

  throw new Error(response.message || "Claim trigger failed");
}

export async function fetchClaimsByUserId(userId) {
  const response = await getRequest(`/claim/${userId}`);

  if (response.success) {
    localStorage.setItem("gig_claims", JSON.stringify(response.claims));
    return response.claims;
  }

  return [];
}

export function getClaims() {
  const saved = localStorage.getItem("gig_claims");
  return saved ? JSON.parse(saved) : [];
}