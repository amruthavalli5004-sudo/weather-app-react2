
import React, { useState, useEffect } from "react";

// WEATHER DATA
const weatherData = {
  vijayawada: {
    temperature: "32°C",
    humidity: "68%",
    wind: "14 km/h",
    condition: "Sunny ☀️"
  },
  hyderabad: {
    temperature: "29°C",
    humidity: "55%",
    wind: "10 km/h",
    condition: "Partly Cloudy 🌤️"
  },
  chennai: {
    temperature: "34°C",
    humidity: "75%",
    wind: "18 km/h",
    condition: "Cloudy ☁️"
  },
  bangalore: {
    temperature: "25°C",
    humidity: "70%",
    wind: "12 km/h",
    condition: "Cloudy ☁️"
  },
  mumbai: {
    temperature: "28°C",
    humidity: "82%",
    wind: "20 km/h",
    condition: "Rainy 🌧️"
  },
  delhi: {
    temperature: "27°C",
    humidity: "45%",
    wind: "8 km/h",
    condition: "Clear Sky ☀️"
  },
  visakhapatnam: {
    temperature: "30°C",
    humidity: "72%",
    wind: "16 km/h",
    condition: "Sunny ☀️"
  },
  tirupati: {
    temperature: "31°C",
    humidity: "65%",
    wind: "13 km/h",
    condition: "Clear Sky ☀️"
  }
};

function App() {

  const [page, setPage] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [message, setMessage] = useState("");

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");

  const [section, setSection] = useState("weather");

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn")
  );

  // NAVIGATION
  function goToLogin() {
    setMessage("");
    setPage("login");
  }

  function goToSignup() {
    setMessage("");
    setPage("signup");
  }

  // SIGNUP
  function signup() {

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill all fields.");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    setMessage("Signup successful!");

    setTimeout(() => {
      setPage("login");
      setMessage("");
    }, 1000);
  }

  // LOGIN
  function login() {

    if (
      loginEmail === "admin@gmail.com" &&
      loginPassword === "admin123"
    ) {
      localStorage.setItem("loggedIn", "admin");
      setLoggedIn("admin");
      setPage("admin");
      return;
    }

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (
      loginEmail === savedEmail &&
      loginPassword === savedPassword &&
      savedEmail !== null
    ) {
      localStorage.setItem("loggedIn", "user");
      setLoggedIn("user");
      setPage("user");
    } else {
      setMessage("Invalid email or password.");
    }
  }

  // LOGOUT
  function logout() {
    localStorage.removeItem("loggedIn");
    setLoggedIn(null);
    setPage("login");
  }

  // WEATHER SEARCH
  function searchWeather() {

    const cityValue = city.trim().toLowerCase();

    if (cityValue === "") {
      alert("Please enter a city name.");
      return;
    }

    if (weatherData[cityValue]) {
      setCityName(
        cityValue.charAt(0).toUpperCase() + cityValue.slice(1)
      );

      setWeather(weatherData[cityValue]);
    } else {
      alert("Weather data not available for this city.");
      setWeather(null);
    }
  }

  // SHOW DASHBOARD SECTION
  function showSection(sectionName) {
    setSection(sectionName);
  }

  // HOME PAGE
  if (page === "home") {
    return (
      <>
        <nav className="navbar">
          <h2>🌦 Weather App</h2>
          <div>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToSignup}>Signup</button>
          </div>
        </nav>

        <section className="hero">
          <h1>Weather Information App</h1>
          <p>
            Get weather information including temperature,
            humidity, wind speed and forecast.
          </p>
          <button className="main-btn" onClick={goToLogin}>
            Get Started
          </button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>🌡 Temperature</h3>
            <p>View current temperature.</p>
          </div>
          <div className="feature-card">
            <h3>💧 Humidity</h3>
            <p>Check humidity information.</p>
          </div>
          <div className="feature-card">
            <h3>💨 Wind Speed</h3>
            <p>View current wind speed.</p>
          </div>
          <div className="feature-card">
            <h3>📅 Forecast</h3>
            <p>View upcoming weather forecast.</p>
          </div>
        </section>
      </>
    );
  }

  // SIGNUP PAGE
  if (page === "signup") {
    return (
      <div className="form-container">
        <h1>🌦 Weather App</h1>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="main-btn" onClick={signup}>
          Signup
        </button>

        <p>{message}</p>

        <p>
          Already registered?{" "}
          <button onClick={goToLogin}>Login</button>
        </p>
      </div>
    );
  }

  // LOGIN PAGE
  if (page === "login") {
    return (
      <div className="form-container">
        <h1>🌦 Weather App</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button className="main-btn" onClick={login}>
          Login
        </button>

        <p>{message}</p>

        <p>
          New user?{" "}
          <button onClick={goToSignup}>Create Account</button>
        </p>
      </div>
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin") {
    return (
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <button onClick={logout}>Logout</button>

        <h2>Registered Users</h2>

        <p>Total Users: {
          localStorage.getItem("userEmail") ? 1 : 0
        }</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {localStorage.getItem("userEmail") && (
              <tr>
                <td>{localStorage.getItem("userName")}</td>
                <td>{localStorage.getItem("userEmail")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  // USER DASHBOARD
  if (page === "user") {
    return (
      <div className="dashboard">
        <h1>User Dashboard</h1>
        <button onClick={logout}>Logout</button>

        <nav>
          <button onClick={() => showSection("weather")}>
            Weather
          </button>
          <button onClick={() => showSection("forecast")}>
            Forecast
          </button>
          <button onClick={() => showSection("tips")}>
            Tips
          </button>
        </nav>

        {section === "weather" && (
          <section id="weather">
            <h2>Weather Search</h2>

            <input
              id="city"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={searchWeather}>Search</button>

            {weather && (
              <div className="weather-card">
                <h2>{cityName}</h2>
                <p>Temperature: {weather.temperature}</p>
                <p>Humidity: {weather.humidity}</p>
                <p>Wind Speed: {weather.wind}</p>
                <p>Condition: {weather.condition}</p>
              </div>
            )}
          </section>
        )}

        {section === "forecast" && (
          <section id="forecast">
            <h2>Weather Forecast</h2>
            <p>Upcoming forecast information.</p>
          </section>
        )}

        {section === "tips" && (
          <section id="tips">
            <h2>Weather Tips</h2>
            <p>Carry an umbrella during rainy weather.</p>
            <p>Drink enough water during hot weather.</p>
          </section>
        )}
      </div>
    );
  }

  return null;
}

export default App;




