import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleFollowingProgress , getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader';
import Pagination from "react-js-pagination";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

componentDidMount(){
  this.props.getUsers(this.props.currentPage, this.props.pageSize);
  
}

  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);

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
//hoc redirect
// let withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setCurrentPage,
//   toggleFollowingProgress,
//   getUsers
// })(withRedirect);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  }),
  withAuthRedirect,
)(UsersContainer)
