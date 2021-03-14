import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../pages/Dialogs';
import Music from '../pages/Music';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Content = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Route path="/" component={Profile}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </BrowserRouter>
    
  )
}
export default Content;