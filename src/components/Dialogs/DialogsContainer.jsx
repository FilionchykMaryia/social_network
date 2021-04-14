import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { withAuthRedirect} from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  return <Dialogs {...props} />
}

//hoc redirect
let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

const mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);
