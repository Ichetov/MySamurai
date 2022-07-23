
// import StoreContext from '../../../StoreContext';
import {addPostAction, addPostTextAction} from './../../../redux/messages-reducer'
import MyPost from "./MyPost";
import { connect } from 'react-redux';


// const MyPostContainer = () => {
 
//   // let state = store.getState().messageReducer

//   // const my = () => {
//   //   store.dispatch(addPostAction());
//   // };

//   return(
//     <StoreContext.Consumer>
//       {store =>{

//       const my = () => {
//         store.dispatch(addPostAction());
//       };
//       let state = store.getState().messageReducer
//       return (
//      <MyPost state = {state} addPost = {my} updateNewPostText={(text)=>{
//       store.dispatch(addPostTextAction(text));
  
//   }} />)

//       }}
//  </StoreContext.Consumer>
//   )
// };


function mapStateToProps(state){

  return {
    messageReducer: state.messageReducer,
    state: state
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addPost: () => {
//       dispatch(addPostAction());
//     },
//     updateNewPostText: (text) => {
//       dispatch(addPostTextAction(text));
//     },
//   }
// }


const MyPostContainer = connect(mapStateToProps, {
   addPostAction,
   addPostTextAction,
  })(MyPost);

export default MyPostContainer;
