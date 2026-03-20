import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";
import { plans } from "../utils/mockData";
import { savePolicy, getPolicy } from "../services/policyService";
import { useAuth } from "../context/AuthContext";

export default function Policy() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [selectedPlan, setSelectedPlan] = useState(getPolicy());
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!selectedPlan) {
      alert("Please select a plan");
      return;
    }

    try {
      setLoading(true);

      await savePolicy({
        userId: user.id,
        name: selectedPlan.name,
        price: selectedPlan.price,
        coverage: selectedPlan.coverage,
        features: selectedPlan.features,
      });

      alert("Weekly policy activated successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container page">
      <div className="section-head">
        <h2>GigShield AI - Weekly Protection Plans</h2>
        <p className="muted">
          Built for Zepto, Blinkit, Swiggy Instamart, and BBNow delivery partners.
        </p>
      </div>

      <div className="grid-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selectedPlan={selectedPlan}
            onSelect={setSelectedPlan}
          />
        ))}
      </div>

      <div className="center">
        <button className="btn" onClick={handleConfirm} disabled={loading}>
          {loading ? "Activating..." : "Activate Weekly Policy"}
        </button>
      </div>
    </div>
  );
}