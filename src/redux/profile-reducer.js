const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 12},
    {id: 2, message: "How are you?", likesCount: 12},
    {id: 3, message: "It\'s my first post", likesCount: 12},
  ],
  newPostText: 'Hello World'
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPost = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;