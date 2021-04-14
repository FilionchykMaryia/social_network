import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    

    return (
      
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

//hoc redirect
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});
//hoc to match.params
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);