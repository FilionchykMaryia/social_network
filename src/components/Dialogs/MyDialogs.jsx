import React from 'react';
import  DialogItem  from './DialogItem';

const MyDialogs = (props) => {

  let dialogs = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);


  return (
        <div className="dialogs-items">
          {dialogs}
        </div>
  )
}
export default MyDialogs;