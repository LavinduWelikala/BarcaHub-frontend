import React from 'react';

const Players = () => {
  // Sample player data
  const players = [
    {
      name: 'Lionel Messi',
      position: 'Forward',
      nationality: 'Argentina',
      image: 'https://via.placeholder.com/150?text=Messi',
      goals: 672,
      assists: 305,
    },
    {
      name: 'Gerard Piqué',
      position: 'Defender',
      nationality: 'Spain',
      image: 'https://via.placeholder.com/150?text=Piqué',
      goals: 50,
      assists: 20,
    },
    {
      name: 'Sergio Busquets',
      position: 'Midfielder',
      nationality: 'Spain',
      image: 'https://via.placeholder.com/150?text=Busquets',
      goals: 20,
      assists: 40,
    },
  ];

  return (
    <div className="players">
      <h1>Top Players</h1>
      <div className="player-cards">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.image} alt={player.name} />
            <h2>{player.name}</h2>
            <p>Position: {player.position}</p>
            <p>Nationality: {player.nationality}</p>
            <div className="stats">
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
