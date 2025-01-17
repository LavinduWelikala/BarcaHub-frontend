import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you create a separate CSS file for styles

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Barca Hub!</h1>
        <p className="hero-subtitle">Your go-to destination for all things FC Barcelona</p>
      </div>

      {/* Info Cards Section */}
      <div className="info-cards">
        <div className="card">
          <h2>Player List</h2>
          <p>Stay updated with the latest FC Barcelona news.</p>
          <Link to="/player-table" className="button">
            Learn More
          </Link>
        </div>
        <div className="card">
          <h2>Upcoming Matches</h2>
          <p>Don't miss a single match! Check out our schedule.</p>
          <Link to="/matches" className="button">
            View Schedule
          </Link>
        </div>
        <div className="card">
          <h2>Top Players</h2>
          <p>Explore the profiles of your favorite players.</p>
          <Link to="/players-list" className="button">
            View Top Players
          </Link>
        </div>
        <div className="card">
          <h2>Best Clubs</h2>
          <p>Explore the world's best clubs.</p>
          <Link to="/clubs-list" className="button">
            View Clubs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
