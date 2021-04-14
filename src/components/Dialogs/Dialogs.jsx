import React from 'react';
import Chat from './Chat';
import MyDialogs from './MyDialogs';
import  Message from './Message';
import  DialogItem  from './DialogItem';
import { Redirect } from 'react-router';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogs = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
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

  // if (!props.isAuth) return <Redirect to={'/login'}/>
  
  return (
      <div className="dialogs">
        <div className="dialogs-items">
          {dialogs}
        </div>
        <div className="chat">
          <div className="messages">
            {messages}
          </div>
          <div className="new-message">
            <textarea className="textarea" onChange={ onNewMessageChange } ref={ newMessageElement } value={ newMessageText }></textarea>
            <button className="button" onClick={ addMessage }>Send message</button>
          </div>
        </div>
      </div>
  )
}
export default Dialogs;