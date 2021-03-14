import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/style.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dialogs from './pages/Dialogs';
import Music from './pages/Music';
import News from './pages/News';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
// import './img/logo4.png';

const App = () => {
  return (
    <div className="app-wrapper ">
      <BrowserRouter>
        <Header /> 
        <Navbar />
          <div className="content">
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
