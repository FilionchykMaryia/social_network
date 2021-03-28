import React from 'react';
import Chat from './Chat';
import MyDialogs from './MyDialogs';
import  Message from './Message';
import  DialogItem  from './DialogItem';

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

console.log(props);
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
            <textarea onChange={ onNewMessageChange } ref={ newMessageElement } value={ newMessageText }></textarea>
            <button onClick={ addMessage }>Send message</button>
          </div>
        </div>
      </div>
  )
}
export default Dialogs;