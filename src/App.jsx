import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  const door = useSelector((state) => state.door.door);

  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
