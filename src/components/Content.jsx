import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Content/Dialogs';
import Music from './Content/Music';
import News from './Content/News';
import Profile from './Content/Profile';
import Settings from './Content/Settings';

const Content = () => {
  return (
    <BrowserRouter>
      <div className="content">
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