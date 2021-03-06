import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "How are you?", likesCount: 12},
        {id: 3, message: "It\'s my first post", likesCount: 12},
      ],
      newPostText: 'Hello World'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Natasha", avatar: "1.jpg"},
        {id: 2, name: "Dima", avatar: "2.jpg"},
        {id: 3, name: "Valera", avatar: "3.jpg"},
        {id: 4, name: "Masha", avatar: "4.jpg"},
        {id: 5, name: "Katya", avatar: "5.jpg"},
        {id: 6, name: "Ura", avatar: "6.jpg"},
        {id: 7, name: "Sofia", avatar: "7.jpg"},
        {id: 8, name: "Andrey", avatar: "8.jpg"}
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
      ],
      newMessageText: '',
    },
    sidebar: {}, 
    
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  // _addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText ='';
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText(newText)  {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}




window.store = store;
export default store;