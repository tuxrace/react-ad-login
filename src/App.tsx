import React from "react";
import "./App.style.scss";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container main-container">
      <div className="content">
        <Router>
          <Login />
        </Router>
      </div>
      <div className="footer gutter-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
