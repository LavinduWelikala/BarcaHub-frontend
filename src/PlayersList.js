import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlayersList.css";

const PlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/players") // Replace with your backend URL if hosted
      .then((response) => {
        setPlayers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="players-container">
      <div className="sidebar">
        <h2>Barca Hub</h2>
        <ul>
          <li>Clubs</li>
          <li className="active">Players</li>
          <li>Matches</li>
          <li>Stadiums</li>
          <li>News</li>
        </ul>
        <button>Log Out</button>
      </div>
      <div className="main-content">
        <h1>Players</h1>
        <div className="player-grid">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <p><strong>Player ID:</strong> {player.id}</p>
              <p><strong>Name:</strong> {player.name}</p>
              <p><strong>Age:</strong> {player.age}</p>
              <p><strong>Position:</strong> {player.position}</p>
              <p><strong>Country:</strong> {player.country}</p>
            </div>
          ))}
        </div>
        <button className="load-more">Load More</button>
      </div>
    </div>
  );
};

export default PlayersList;
