export default class Claim {
  constructor({ id, userId, triggerType, amount, description }) {
    this.id = id;
    this.userId = userId;
    this.triggerType = triggerType;
    this.amount = amount;
    this.description = description;
    this.status = "Approved";
    this.createdAt = new Date().toLocaleString();
  }
}