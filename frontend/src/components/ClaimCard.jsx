export default function ClaimCard({ claim }) {
  return (
    <div className="card claim-card">
      <div className="claim-top">
        <h3>{claim.triggerType}</h3>
        <span className="badge approved">{claim.status}</span>
      </div>
      <p>{claim.description}</p>
      <div className="claim-meta">
        <span>Payout: ₹{claim.amount}</span>
        <span>{claim.createdAt}</span>
      </div>
    </div>
  );
}