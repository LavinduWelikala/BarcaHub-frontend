import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerTable = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch players from the API
    axios.get('http://localhost:8080/players')
      .then((response) => {
        setPlayers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
        setError('Failed to fetch players. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading players...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="table-container">
      <h1>Player List</h1>
      <table border="1" className="player-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Position</th>
            <th>Jersey Number</th>
            <th>Club ID</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
              <td>{player.jerseyNumber ? player.jerseyNumber : 'N/A'}</td>
              <td>{player.clubId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Adding some simple styling */}
      <style jsx>{`
        .table-container {
          width: 80%;
          max-width: 1000px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .player-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .player-table th,
        .player-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .player-table th {
          background-color:rgb(62, 180, 66);
          color: white;
        }

        .player-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .player-table tr:hover {
          background-color: #ddd;
        }

        .player-table td {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default PlayerTable;
