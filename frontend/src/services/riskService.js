import { postRequest } from "./api";

export async function getRiskAssessment(location, hours) {
  const response = await postRequest("/risk/calculate", {
    location,
    hours,
  });

  if (response.success) {
    return response.risk;
  }

  throw new Error(response.message || "Risk calculation failed");
}