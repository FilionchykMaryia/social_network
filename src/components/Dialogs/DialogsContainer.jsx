import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
// import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
  
//   return <StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState().dialogsPage;

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageActionCreator());
//         }
      
//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageBodyCreator(text));
//         }

//         return <Dialogs updateNewMessageBody={onMessageChange} 
//                 sendMessage={onSendMessageClick} 
//                 dialogsPage={state}/>
//       }
//     }
//   </StoreContext.Consumer>
// }

const mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage 
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;