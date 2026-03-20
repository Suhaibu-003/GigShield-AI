import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getPolicy } from "../services/policyService";
import { getClaims } from "../services/claimService";
import { getRiskAssessment } from "../services/riskService";
import RiskMeter from "../components/RiskMeter";

export default function Dashboard() {
  const { user } = useAuth();
  const policy = getPolicy();
  const claims = getClaims();

  const [risk, setRisk] = useState(null);

  useEffect(() => {
    const fetchRisk = async () => {
      if (!user) return;
      const result = await getRiskAssessment(user.location, user.hours);
      setRisk(result);
    };
    fetchRisk();
  }, [user]);

  return (
    <div className="container page">
      <div className="dashboard-head">
        <div>
          <h2>Welcome, {user?.name}</h2>
          <p className="muted">
            {user?.platform} Delivery Partner | {user?.location}
          </p>
        </div>

        <Link to="/policy" className="btn">
          {policy ? "View Policy" : "Choose Plan"}
        </Link>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Work Profile</h3>
          <p>Platform: {user?.platform}</p>
          <p>Working Hours: {user?.hours} hrs/day</p>
          <p>Segment: Q-Commerce (Instant Grocery Delivery)</p>
        </div>

        <div className="card">
          <h3>Active Coverage</h3>
          {policy ? (
            <>
              <p>Plan: {policy.name}</p>
              <p>Premium: ₹{policy.price}/week</p>
              <p>Status: Protected ✅</p>
            </>
          ) : (
            <p>No active protection plan</p>
          )}
        </div>

        <div className="card">
          <h3>Income Protection</h3>
          <p>Total Claims: {claims.length}</p>
          <p>
            Protected Earnings: ₹
            {claims.reduce((sum, c) => sum + c.amount, 0)}
          </p>
        </div>
      </div>

      <RiskMeter risk={risk} />

      <div className="cta-row">
        <Link to="/policy" className="btn">
          Manage Plan
        </Link>
        <Link to="/demo" className="btn btn-outline">
          Simulate Disruption
        </Link>
      </div>
    </div>
  );
}