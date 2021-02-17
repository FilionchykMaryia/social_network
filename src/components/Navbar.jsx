import React from 'react';


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-item">
        <a href="/profile" className="nav-link">Profile</a>
      </div>
      <div className="nav-item">
        <a href="/dialogs" className="nav-link">Messages</a>
      </div>
      <div className="nav-item">
        <a href="/news" className="nav-link">News</a>
      </div>
      <div className="nav-item">
        <a href="/music" className="nav-link">Music</a>
      </div>
      <div className="nav-item">
        <a href="/settings" className="nav-link">Settings</a>
      </div>
    </nav>
  )
}
export default Navbar;