let rerenderEntireTree = () => {
  console.log('State changed');
}


let state = {
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
    ]
  },
  sidebar: {}, 
  
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText ='';
  rerenderEntireTree(state);
}

export const updateNewPostText  = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;