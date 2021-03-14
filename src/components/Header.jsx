import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL +`/img/origami.png`} alt="logo" className="header-logo"/>
   </header>
  )
}
export default Header;