import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


const NavbarContainer = () => {

  return <StoreContext.Consumer>
    {
      store => {
        let state = store.getState().dialogsPage;

        return  <Navbar state={state}/>
      }
    }
  </StoreContext.Consumer>
    


  
}
export default NavbarContainer;