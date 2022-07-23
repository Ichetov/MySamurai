import Dialogs from "./Dialogs";
import { addNewMessage, addMessageAction } from "./../../redux/profile-reducer";
// import StoreContext from './../../StoreContext';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAutchRedirect } from "../../hoc/withAutchRedirect";
import { compose } from "redux";
// const DialogsComonent = () => {
//   // let onNewMessageChange = (text) => {
//   //   store.dispatch(addNewMessage(text));
//   // };
//   // let onSendMessageClick = () => {
//   //   store.dispatch(addMessageAction());
//   // };
//   // let state = store.getState().profileReducer;
//   return (
//     <StoreContext.Consumer>
//       {( store ) => (
//         <Dialogs
//           state={store.getState().profileReducer}
//           onNewMessageChange={(text)=>{
//              store.dispatch(addNewMessage(text));
//           }}
//           onSendMessageClick={()=>{
//             store.dispatch(addMessageAction());
//           }}
//         />
//       )}
//     </StoreContext.Consumer>
//   );
// };




let mapStateToProps = (state)=>{

 return {
   dialogsName: state.profileReducer.dialogsName,
   dialogsMessage: state.profileReducer.dialogsMessage,
   messageText: state.profileReducer.messageText,


   //  profileReducer: state.profileReducer
 };
}




let mapDispatchToProps = (dispatch)=>{
  return {
    onNewMessageChange: (text) => {
      dispatch(addNewMessage(text));
    },
    onSendMessageClick: (text)=>{
      dispatch(addMessageAction(text));
    }
  };
}

// let redirectComponent = withAutchRedirect(Dialogs);



// const redirectComponent = (props) => {
//  if (props.isAutch === false) {
//    return <Navigate to="/login" />;
//  }
//   return <Dialogs {...props} />;
// };

// const DialogsComonent = connect(mapStateToProps, mapDispatchToProps)(redirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAutchRedirect
)(Dialogs);
