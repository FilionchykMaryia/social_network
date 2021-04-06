import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader';
import Pagination from "react-js-pagination";
import { getUsers, usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

componentDidMount(){
  
  this.props.toggleIsFetching(true);
  usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    
    this.props.toggleIsFetching(false);
    this.props.setUsers(data.items);
    this.props.setTotalUsersCount(data.totalCount);
  });
}

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
    //   withCredentials: true
    // })
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false); 
        this.props.setUsers(data.items)
      });
  }

  render(){ 
    
    return <>
    {this.props.isFetching ? <Preloader /> : null}
      <Pagination
          activePage={this.props.currentPage}
          itemsCountPerPage={this.props.pageSize}
          totalItemsCount={this.props.totalUsersCount}
          pageRangeDisplayed={5}
          onChange={this.onPageChanged}
        />
      <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
        users={this.props.users} 
        unfollow={this.props.unfollow} 
        follow={this.props.follow} 
        isFetching={this.props.isFetching}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) =>{
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching, toggleFollowingProgress
})(UsersContainer);

