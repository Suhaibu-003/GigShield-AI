export const calculateRisk = (location, hours) => {
  const loc = location.toLowerCase();

  let score = 30;

  if (loc.includes("chennai") || loc.includes("mumbai")) score += 30;
  if (loc.includes("delhi")) score += 25;
  if (loc.includes("coimbatore") || loc.includes("bangalore")) score += 10;

  if (hours >= 10) score += 20;
  else if (hours >= 8) score += 10;

  let level = "LOW";
  if (score >= 70) level = "HIGH";
  else if (score >= 45) level = "MEDIUM";

  return { level, score };
};