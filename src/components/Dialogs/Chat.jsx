import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import  Message from './Message';

const Chat = (props) => {

  let state = props.dialogsPage;

  let messages = state.messages.map(message => <Message key={message.id} message={message.message}/>);
  let newMessageText = state.newMessageText;
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.sendMessage();
  }

  let onNewMessageChange = () => {
    let text = newMessageElement.current.value;
    // props.store.dispatch(updateNewMessageBodyCreator(text));
    props.updateNewMessageBody(text);
   
  }
  
  return (
        <div className="chat">
          <div className="messages">
            {messages}
          </div>
          <div className="new-message">
            <textarea onChange={ onNewMessageChange } ref={ newMessageElement } value={ newMessageText }></textarea>
            <button onClick={ addMessage }>Send message</button>
          </div>
        </div>
  )
}
export default Chat;