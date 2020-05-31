import React from 'react';
import './App.style.scss';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container main-container">
        <div className="content">
          <Login />
        </div>
        <div className="footer gutter-bottom"><Footer /></div>
      </div>
    </Router>
  );
}

export default App;
