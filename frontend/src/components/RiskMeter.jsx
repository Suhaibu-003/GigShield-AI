export default function RiskMeter({ risk }) {
  if (!risk) return null;

  return (
    <div className="card">
      <h3>AI Risk Assessment</h3>
      <div className="risk-wrap">
        <div className="risk-bar">
          <div
            className={`risk-fill ${risk.level.toLowerCase()}`}
            style={{ width: `${risk.score}%` }}
          />
        </div>
        <div className="risk-info">
          <span>Risk Level: {risk.level}</span>
          <span>Score: {risk.score}/100</span>
        </div>
      </div>
    </div>
  );
}