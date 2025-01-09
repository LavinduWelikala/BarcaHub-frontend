import React from 'react';
import './App.css'; // Custom styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './components/Home';
import Matches from './components/Matches';
import Players from './components/Players';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
