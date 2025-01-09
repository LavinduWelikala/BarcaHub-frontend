import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Barca Hub</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/players">Players</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
