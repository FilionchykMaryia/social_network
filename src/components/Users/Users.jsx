import React from 'react';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }

  // getUsers = () => {
  //   if(this.props.users.length === 0){
  //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then(response => {
  //         this.props.setUsers(response.data.items)
  //       })
  //     }
  // }

  render(){
    return <div>
    {
      this.props.users.map((u, i) => <div key={u.id}>
        <span>
          <div>
            <img className="avatar" src={ u.photos.small != null ? 
            u.photos.small : 
            process.env.PUBLIC_URL +`/img/avatars/${i + 1}.jpg`} alt="avatar"/>
          </div>
          <div>
            {
            u. followed ? 
              <button onClick={() => { this.props.unfollow(u.id)}}>
                Unfollow
              </button> 
            : 
              <button onClick={() => { this.props.follow(u.id)}}>
                Follow
              </button>
            }
          </div>
        </span>
        <span>
          <span>
            <span>{u.name}</span>
            <span>{u.status}</span>
          </span>
          <span>
            <span>{"u.location.country"}</span>
            <span>{"u.location.city"}</span>
          </span>
        </span>
      </div>)
    }
  </div>
  }
}
export default Users;