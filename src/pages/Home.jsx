
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>🌦 Weather App</h2>

        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to Weather App</h1>

        <p>
          Get weather updates, forecasts and useful weather information
          for your city.
        </p>

        <Link to="/login" className="start-btn">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
