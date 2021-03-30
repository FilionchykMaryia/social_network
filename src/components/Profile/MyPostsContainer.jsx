import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profile-reducer';
// import StoreContext from '../../StoreContext';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {
  
//   //let state = props.store.getState();
//   // console.log(state);

//   return (
//     <StoreContext.Consumer> 
//       {
//         (store) => {
//           let state = store.getState();
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
        
//           let onPostChange = (text) => {
//             let action = updateNewPostActionCreator(text);
//             store.dispatch(action);
//           }
//           return <MyPosts 
//             updateNewPostText={ onPostChange }  
//             addPost={ addPost } 
//             posts={state.profilePage.posts} 
//             newPostText={state.profilePage.newPostText}/>
//         }
//     } 
//     </StoreContext.Consumer>
    
//     ) 
// }
const mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;