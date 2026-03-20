import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          GigShield AI
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
          {user && <Link to="/policy">Policy</Link>}
          {user && <Link to="/claims">Claims</Link>}
          {user && <Link to="/demo">Simulation</Link>}
          {!user ? (
            <Link to="/register" className="btn btn-sm">
              Get Started
            </Link>
          ) : (
            <button className="btn btn-sm btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}