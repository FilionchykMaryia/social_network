const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type){

    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      };
    
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newText,
      }; 
    default: 
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => 
  ({type: UPDATE_NEW_MESSAGE, newText: text});
export default dialogsReducer;