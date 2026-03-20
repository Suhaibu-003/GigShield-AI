export function calculateRisk(location, hours) {
  const loc = location.toLowerCase();

  let score = 30;

  if (loc.includes("chennai") || loc.includes("mumbai")) score += 30;
  if (loc.includes("delhi")) score += 25;
  if (loc.includes("coimbatore") || loc.includes("bangalore")) score += 10;

  if (hours >= 10) score += 20;
  else if (hours >= 8) score += 10;

  if (score >= 70) return { level: "HIGH", score };
  if (score >= 45) return { level: "MEDIUM", score };
  return { level: "LOW", score };
}