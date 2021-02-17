import React from 'react';
import './style/style.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
// import './img/logo4.png';

const App = () => {
  return (
    <div className="app-wrapper ">
      
        <Header /> 
        <Navbar />
        <Content />
     
      
    </div>
  );
}

export default App;
