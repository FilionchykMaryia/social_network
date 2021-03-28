import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/style.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dialogs from '../src/components/Dialogs/Dialogs';
import Music from '../src/components/Music/Music';
import News from '../src/components/News/News';
import Profile from '../src/components/Profile/Profile';
import Settings from '../src/components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import './img/logo4.png';

const App = (props) => {

  return (
    <div className="app-wrapper ">
      <BrowserRouter>
        <Header /> 
        <Navbar state={props.state.dialogsPage}/>
          <div className="content">
            <Route path="/profile" 
              render={() => <Profile store={props.store}/>} />
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>

          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
