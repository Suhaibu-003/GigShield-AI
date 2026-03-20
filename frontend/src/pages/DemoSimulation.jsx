import { useState } from "react";
import TriggerSimulator from "../components/TriggerSimulator";
import Loader from "../components/Loader";
import { createClaim } from "../services/claimService";
import { useAuth } from "../context/AuthContext";

export default function DemoSimulation() {
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleTrigger = async (trigger) => {
    try {
      setProcessing(true);
      setResult(null);

      const response = await createClaim(user.id, trigger.type);

      setResult({
        claim: response.claim,
        payout: response.payout,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container page">
      <div className="section-head">
        <h2>Q-Commerce Disruption Simulation</h2>
        <p className="muted">
          Simulate disruptions affecting instant grocery delivery platforms.
        </p>
      </div>

      <TriggerSimulator onTrigger={handleTrigger} />

      {processing && <Loader />}

      {result && (
        <div className="card success-card">
          <h3>Claim Triggered Successfully</h3>
          <p>
            Event: <strong>{result.claim.triggerType}</strong>
          </p>
          <p>Status: {result.claim.status}</p>
          <p>Payout: ₹{result.claim.amount}</p>
          <p>Transaction ID: {result.payout.transactionId}</p>
          <p className="muted">{result.payout.processedAt}</p>
        </div>
      )}
    </div>
  );
}