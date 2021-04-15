import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { withAuthRedirect} from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {
//   return <Dialogs {...props} />
// }

const mapStateToProps = (state) =>{
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
  withAuthRedirect
  )(Dialogs)

//hoc redirect
// let AuthRedirectComponent = withAuthRedirect(Dialogs);



// export default connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);
