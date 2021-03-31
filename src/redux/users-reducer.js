const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = { 
  users: [
    // {id: 1, photoUrl: '2.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: 2, photoUrl: '5.jpg', followed: true, fullName: 'Katya', status: 'I am a lady', location: {city: 'Moscow', country: 'Russia'}},
    // {id: 3, photoUrl: '8.jpg', followed: false, fullName: 'Andry', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    // {id: 4, photoUrl: '7.jpg', followed: true, fullName: 'Sofia', status: 'I am a little boss', location: {city: 'Grodno', country: 'Belarus'}},
  ],  
};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId){
            return {...u, followed: true}
          }
          return u;
        })
      };
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;