export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    coverage: "Up to ₹400 lost income/week",
    features: [
      "Rain trigger",
      "Pollution trigger",
      "Auto claim",
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: 49,
    coverage: "Up to ₹800 lost income/week",
    features: [
      "Rain trigger",
      "Pollution trigger",
      "Zone closure",
      "Auto payout",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: 69,
    coverage: "Up to ₹1200 lost income/week",
    features: [
      "All triggers",
      "Priority processing",
      "Higher payout",
    ],
  },
];

export const triggerOptions = [
  {
    type: "Heavy Rain",
    payout: 400,
    message: "Heavy rainfall disrupted deliveries in your zone.",
  },
  {
    type: "Severe Pollution",
    payout: 300,
    message: "Air quality exceeded safe delivery threshold.",
  },
  {
    type: "Zone Closure",
    payout: 350,
    message: "Local market or delivery zone was unexpectedly closed.",
  },
  {
    type: "Flood Alert",
    payout: 500,
    message: "Flood condition prevented delivery activity.",
  },
];