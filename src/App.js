import React from 'react';
import { Route } from 'react-router-dom';
import './style/style.scss';
import Header from './components/Header';
import Music from '../src/components/Music/Music';
import News from '../src/components/News/News';
import Profile from '../src/components/Profile/Profile';
import Settings from '../src/components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/NavBar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {

  return (
    <div className="app-wrapper ">
        <Header /> 
        <NavbarContainer />
          <div className="content">
            <Route path="/profile" render={() => <Profile/>} />
            <Route path="/dialogs" render={() => <DialogsContainer/>} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
    </div>
  );
}

export default App;
