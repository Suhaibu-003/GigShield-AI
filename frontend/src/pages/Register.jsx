import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    platform: "Zepto",
    location: "",
    hours: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.location || !form.hours) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const user = await registerUser(form);
      login(user);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container page">
      <div className="form-card">
        <h2>GigShield AI - Q-Commerce Worker Onboarding</h2>
        <p className="muted">
          Register as a delivery partner (Zepto, Blinkit, Instamart, BBNow)
        </p>

        <form onSubmit={handleSubmit} className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <select name="platform" value={form.platform} onChange={handleChange}>
            <option>Zepto</option>
            <option>Blinkit</option>
            <option>Swiggy Instamart</option>
            <option>BigBasket (BBNow)</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="City (Eg: Chennai, Bangalore)"
            value={form.location}
            onChange={handleChange}
          />

          <input
            type="number"
            name="hours"
            placeholder="Daily Working Hours"
            value={form.hours}
            onChange={handleChange}
          />

          <button type="submit" className="btn full" disabled={loading}>
            {loading ? "Registering..." : "Start Protection"}
          </button>
        </form>
      </div>
    </div>
  );
}