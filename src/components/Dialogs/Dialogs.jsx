import React from 'react';
import  DialogItem  from './DialogItem';
import  Message from './Message';

const Dialogs = (props) => {

  let dialogs = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

  let messages = props.state.messages.map(message => <Message key={message.id} message={message.message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

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
            <textarea ref={ newMessageElement }></textarea>
            <button onClick={ addMessage }>Send message</button>
          </div>
        </div>
        
      </div>
  )
}
export default Dialogs;