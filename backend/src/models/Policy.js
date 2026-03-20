export default class Policy {
  constructor({ id, userId, name, price, coverage, features }) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.price = price;
    this.coverage = coverage;
    this.features = features;
    this.active = true;
    this.startDate = new Date().toLocaleDateString();
  }
}