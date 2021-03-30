import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';


const Navbar = (props) => {

  let firstsFriends = props.state.dialogs.slice(0, 6);
  let friendsAvatars = firstsFriends.map( dialog => 
    <img className="mini-ava" key={dialog.id} src={process.env.PUBLIC_URL +`/img/avatars/${dialog.avatar}`}  alt={dialog.name}/>
  );

  return (
    
      <nav className="nav">
        
        <div className="nav-item">
          <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/dialogs" className="nav-link">Messages</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/news" className="nav-link">News</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/music" className="nav-link">Music</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/settings" className="nav-link">Settings</NavLink>
        </div>

        <div className="nav-item">
          <NavLink to="/friends" className="nav-link" activeClassName="active">Friends</NavLink>
          <div className="friends-pre">
            {friendsAvatars}
          </div>
        </div>
        
      </nav>
    
    
  )
}
export default Navbar;