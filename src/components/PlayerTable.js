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
    <div>
      <h1>Player List</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
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
              <td>{player.jerseyNumber}</td>
              <td>{player.clubId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
