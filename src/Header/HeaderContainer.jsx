import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, toggleIsFetching } from '../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.toggleIsFetching(true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true,
    headers: {
      "API-KEY": "f691a50b-473c-431b-9397-0f2b9b486e22"
    }
    })
    .then(response => { 
      console.log(response);
      if (response.data.resultCode === 0){
        let {id, email, login} = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
      this.props.toggleIsFetching(false);
      
    });

  }
    render() {
      return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
  
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching,

});

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);