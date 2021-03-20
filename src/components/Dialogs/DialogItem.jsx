import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem =(props) => {

  return (
    <div className="dialogs-item">
      <img className="avatar" src={process.env.PUBLIC_URL +`/img/avatars/${props.avatar}`}  alt={props.name}/>
      <NavLink className="dialog" to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
