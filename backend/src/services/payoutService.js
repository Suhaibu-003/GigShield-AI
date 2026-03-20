export const processPayout = (amount) => {
  return {
    payoutStatus: "Success",
    amount,
    method: "Mock UPI Transfer",
    transactionId: `TXN${Date.now()}`,
    processedAt: new Date().toLocaleString(),
  };
};