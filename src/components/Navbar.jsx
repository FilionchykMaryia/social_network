import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';


const Navbar = () => {
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
        
      </nav>
    
    
  )
}
export default Navbar;