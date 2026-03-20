import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container page">
      <section className="hero">
        <div>
          <span className="pill">Guidewire DEVTrails 2026</span>
          <h1>AI-Powered Income Protection for India’s Gig Workers</h1>
          <p className="hero-text">
            GigShield AI provides automated income protection for Q-Commerce delivery partners by detecting real-time disruptions and instantly triggering payouts using a parametric insurance model.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn">
              Start Demo
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Simulation
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Why this matters</h3>
          <p>Protect weekly earnings, not vehicle damage or health.</p>
          <div className="stats">
            <div className="stat-box">
              <strong>Weekly</strong>
              <span>Premium Model</span>
            </div>
            <div className="stat-box">
              <strong>AI</strong>
              <span>Risk Profiling</span>
            </div>
            <div className="stat-box">
              <strong>Auto</strong>
              <span>Claim Trigger</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}