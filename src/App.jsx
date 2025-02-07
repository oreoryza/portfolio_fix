import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App