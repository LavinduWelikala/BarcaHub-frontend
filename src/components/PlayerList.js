import React, { useEffect, useState } from "react";
import axios from "axios";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch players from the backend
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/players");
        setPlayers(response.data);
      } catch (err) {
        setError("Failed to fetch players. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Loading players...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red", padding: "20px" }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Our Top Players
      </h1>
      {players.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No players found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={thStyle}>Player ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Position</th>
              <th style={thStyle}>Jersey Number</th>
              <th style={thStyle}>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={player.playerId}
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  textAlign: "left",
                }}
              >
                <td style={tdStyle}>{player.playerId}</td>
                <td style={tdStyle}>{player.name}</td>
                <td style={tdStyle}>{player.age}</td>
                <td style={tdStyle}>{player.position}</td>
                <td style={tdStyle}>{player.jerseyNumber}</td>
                <td style={tdStyle}>{player.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  padding: "12px 15px",
  fontSize: "16px",
  color: "#333",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "10px 15px",
  fontSize: "14px",
  color: "#555",
  borderBottom: "1px solid #ddd",
};

export default PlayerList;
