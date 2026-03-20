import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import policyRoutes from "./routes/policyRoutes.js";
import claimRoutes from "./routes/claimRoutes.js";
import riskRoutes from "./routes/riskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Gig Insurance API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/policy", policyRoutes);
app.use("/api/claim", claimRoutes);
app.use("/api/risk", riskRoutes);

export default app;