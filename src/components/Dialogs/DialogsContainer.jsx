import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import  Message from './Message';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  }
  
  return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}
export default DialogsContainer;