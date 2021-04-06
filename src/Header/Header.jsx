import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL +`/img/origami.png`} alt="logo" className="header-logo"/>
      <div className='login-block'>
        {props.isAuth ? props.login : 
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
   </header>
  )
}
export default Header;