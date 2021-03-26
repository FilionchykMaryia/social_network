import React from 'react';
import Chat from './Chat';
import MyDialogs from './MyDialogs';

const Dialogs = (props) => {

  return (
      <div className="dialogs">
        <MyDialogs dialogs={props.dialogsPage.dialogs}/>
        <Chat messages={props.dialogsPage.messages} newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch}/>
      </div>
  )
}
export default Dialogs;