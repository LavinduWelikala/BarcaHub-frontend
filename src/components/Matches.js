import React from 'react';

const Matches = () => {
  // Sample match data
  const matches = [
    {
      date: '2025-01-15',
      opponent: 'Real Madrid',
      time: '21:00',
      venue: 'Camp Nou',
    },
    {
      date: '2025-01-22',
      opponent: 'Atletico Madrid',
      time: '19:00',
      venue: 'Wanda Metropolitano',
    },
    {
      date: '2025-01-29',
      opponent: 'Sevilla',
      time: '20:45',
      venue: 'Camp Nou',
    },
  ];

  return (
    <div className="matches">
      <h1>Upcoming Matches</h1>
      <div className="match-cards">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <h2>{match.opponent}</h2>
            <p>Date: {match.date}</p>
            <p>Time: {match.time}</p>
            <p>Venue: {match.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
