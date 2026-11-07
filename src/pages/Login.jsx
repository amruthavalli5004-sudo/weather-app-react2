
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin login
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("loggedIn", "admin");
      navigate("/admin");
      return;
    }

    // Registered user login
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword && savedEmail) {
      localStorage.setItem("loggedIn", "user");
      navigate("/user");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h1>🌦 Weather App</h1>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Login;
