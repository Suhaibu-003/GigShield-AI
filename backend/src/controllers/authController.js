import User from "../models/User.js";
import { users } from "../data/mockData.js";

export const registerUser = (req, res) => {
  try {
    const { name, phone, platform, location, hours } = req.body;

    if (!name || !phone || !platform || !location || !hours) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newUser = new User({
      id: Date.now(),
      name,
      phone,
      platform,
      location,
      hours: Number(hours),
    });

    users.push(newUser);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while registering user",
    });
  }
};

export const getUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    count: users.length,
    users,
  });
};