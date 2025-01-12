import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Matches from "./components/Matches";
import Players from "./components/Players";
import Navbar from "./components/Navbar";
import CreateClub from "./components/CreateClub";
import Stadium from "./components/Stadium";
import PlayerList from "./components/PlayerList";
import ClubList from "./components/ClubList";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/create-club" element={<CreateClub />} />
          <Route path="/create-stadium" element={<Stadium />} />
          <Route path="/players-list" element={<PlayerList />} />
          <Route path="/clubs-list" element={<ClubList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
