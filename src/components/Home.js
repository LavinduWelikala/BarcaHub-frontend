import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Barca Hub!</h1>
        <p>Your go-to destination for all things FC Barcelona</p>
      </div>
      <div className="info-cards">
        <div className="card">
          <h2>Latest News</h2>
          <p>Stay updated with the latest FC Barcelona news.</p>
        </div>
        <div className="card">
          <h2>Upcoming Matches</h2>
          <p>Don't miss a single match! Check out our schedule.</p>
        </div>
        <div className="card">
          <h2>Top Players</h2>
          <p>Explore the profiles of your favorite players.</p>
          {/* Link to the PlayerList page */}
          <Link to="/players-list" className="button">
            View Top Players
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
