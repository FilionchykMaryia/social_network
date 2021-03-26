import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import  Message from './Message';

const Chat = (props) => {

  let messages = props.messages.map(message => <Message key={message.id} message={message.message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    // let text = newMessageElement.current.value;
    // alert(text);
    props.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    
    let action = updateNewMessageBodyCreator(text);
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
   
  }
  
  return (
        <div className="chat">
          <div className="messages">
            {messages}
          </div>
          <div className="new-message">
            <textarea onChange={ onMessageChange } ref={ newMessageElement } value={props.newMessageText}></textarea>
            <button onClick={ addMessage }>Send message</button>
          </div>
        </div>
  )
}
export default Chat;