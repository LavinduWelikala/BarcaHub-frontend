import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayersList from "./PlayersList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayersList />} />
      </Routes>
    </Router>
  );
}

export default App;
