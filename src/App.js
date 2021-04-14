import React from 'react';
import { Route } from 'react-router-dom';
import './style/style.scss';
import Music from '../src/components/Music/Music';
import News from '../src/components/News/News';
import Settings from '../src/components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/NavBar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import LoginPage from './components/Login/Login';


const App = () => {

  return (
    <div className="app-wrapper ">
        <HeaderContainer /> 
        <NavbarContainer />
          <div className="content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
            <Route path="/dialogs" render={() => <DialogsContainer/>} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" component={LoginPage}/>
          </div>
    </div>
  );
}

export default App;
