import { triggerOptions } from "../utils/mockData";

export default function TriggerSimulator({ onTrigger }) {
  return (
    <div className="card">
      <h3>Parametric Trigger Simulator</h3>
      <p className="muted">
        Simulate external disruptions and auto-trigger claim approval.
      </p>

      <div className="grid-2">
        {triggerOptions.map((trigger) => (
          <button
            key={trigger.type}
            className="trigger-btn"
            onClick={() => onTrigger(trigger)}
          >
            <strong>{trigger.type}</strong>
            <span>Potential payout: ₹{trigger.payout}</span>
          </button>
        ))}
      </div>
    </div>
  );
}