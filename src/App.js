import React from 'react';
import './style/style.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import './img/logo4.png';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header /> 
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
