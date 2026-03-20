import { useEffect, useState } from "react";
import ClaimCard from "../components/ClaimCard";
import { fetchClaimsByUserId } from "../services/claimService";
import { useAuth } from "../context/AuthContext";

export default function Claims() {
  const { user } = useAuth();
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const loadClaims = async () => {
      if (!user) return;
      const data = await fetchClaimsByUserId(user.id);
      setClaims(data);
    };
    loadClaims();
  }, [user]);

  return (
    <div className="container page">
      <div className="section-head">
        <h2>Protected Earnings & Claims</h2>
        <p className="muted">
          Auto-approved payouts for disrupted delivery hours.
        </p>
      </div>

      {claims.length === 0 ? (
        <div className="card">
          <p>No claims yet. Go to Simulation page and trigger a disruption.</p>
        </div>
      ) : (
        <div className="stack">
          {claims.map((claim) => (
            <ClaimCard key={claim.id} claim={claim} />
          ))}
        </div>
      )}
    </div>
  );
}