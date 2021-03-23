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
// import './img/logo4.png';

const App = (props) => {

  return (
    <div className="app-wrapper ">
      <BrowserRouter>
        <Header /> 
        <Navbar state={props.state.dialogsPage}/>
          <div className="content">
            <Route path="/profile" 
              render={() => <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}/>} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} addPost={props.addPost}/>} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>

          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
