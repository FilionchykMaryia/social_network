import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
// import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


// const NavbarContainer = () => {

//   return <StoreContext.Consumer>
//     {
//       store => {
//         let state = store.getState().dialogsPage;

//         return  <Navbar state={state}/>
//       }
//     }
//   </StoreContext.Consumer>

// }
let mapStateToProps = (state) =>{
  return {
    state: state.dialogsPage 
  }
}
const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;