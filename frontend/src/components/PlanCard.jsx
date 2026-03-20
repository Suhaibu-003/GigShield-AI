export default function PlanCard({ plan, selectedPlan, onSelect }) {
  const isSelected = selectedPlan?.id === plan.id;

  return (
    <div className={`card plan-card ${isSelected ? "selected" : ""}`}>
      <h3>{plan.name}</h3>
      <p className="price">₹{plan.price}/week</p>
      <p>{plan.coverage}</p>

      <ul className="feature-list">
        {plan.features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>

      <button className="btn" onClick={() => onSelect(plan)}>
        {isSelected ? "Selected" : "Choose Plan"}
      </button>
    </div>
  );
}