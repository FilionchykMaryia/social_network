import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage 
  }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(Dialogs);

export default DialogsContainer;