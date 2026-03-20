export default class User {
  constructor({ id, name, phone, platform, location, hours }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.platform = platform;
    this.location = location;
    this.hours = hours;
    this.createdAt = new Date().toLocaleString();
  }
}