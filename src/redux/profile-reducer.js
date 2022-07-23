import { profileAPI } from "../api/api";



const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

const ADD_MESSAGE = 'ADD_MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_ACTION = ' DELETE_ACTION'


let initialState = {
   dialogsName: [
      {id: 1, name: "Dimych"},
      {id:2, name:"Andrey"},
      {id:3,name:"Sveta"},
      {id:4, name:"Alex"}
],
   dialogsMessage: [
     {id :1, message:'Hi'},
     {id :2, message:'Hi my'},
     {id :3, message:'How is your'},
],
  messageText: '',
  profile: null,
  status: ''
  }

export const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_NEW_MESSAGE:
      //  state.messageText = action.messageText;
       return {...state, messageText: action.messageText}
      //  return state;
    case ADD_MESSAGE:
       const newMessage = {
    id: 4,
    message: action.text
  }
  // state.dialogsMessage.push(newMessage);
  // let newState = {...state}
  // newState.dialogsMessage.push(newMessage)
  // return newState
  // let newState = {...state};
  // newState.dialogsMessage.push(newMessage);
  // newState.messageText = '';


  return {...state, dialogsMessage: [...state.dialogsMessage, newMessage], messageText: ''}
    // ...state,
    // dialogsMessage: [...state.dialogsMessage, newMessage],
    // messageText: ''

    case SET_USER_PROFILE:
      return {...state, profile: action.data}

      case SET_USER_STATUS:
        return {...state, status: action.stat}
        case DELETE_ACTION:
          return {...state, dialogsMessage: state.dialogsMessage.filter(item =>{
            if (item.id !== action.postId){
              return true
            }
          })}

  default:
    return state
  }
}



export const addNewMessage = (messageText) => ({
  type: UPDATE_NEW_MESSAGE,
  messageText
});

export const addMessageAction = (text) => ({
  type: ADD_MESSAGE,
  text
});


export const setUsersProfile = (data)=>({
  type: SET_USER_PROFILE,
  data,
})


export const setUsersStatus = (stat) => ({
  type: SET_USER_STATUS,
  stat,
})

export const deletePost = (postId)=>({
 type: DELETE_ACTION,
 postId
})


export const profilee = (id)=>{

  return (dispatch)=>{
       profileAPI.profile(id)
         .then((res) => {
       
          dispatch(setUsersProfile(res))
           
           //  this.props.setUsers(res.data.items);
           //  this.props.setPlaceHold(false);
         });
  }
}



export const getStatus = (id) => {

  return (dispatch) => {
    profileAPI.getStatus(id)
      .then((res) => {
         console.log(res.data);
         
        dispatch(setUsersStatus(res.data))

        //  this.props.setUsers(res.data.items);
        //  this.props.setPlaceHold(false);
      });
  }
}


export const upDateStatus = (message) => {

  return async (dispatch) => {
   let res = await profileAPI.updateStatus(message)
     
        if(res.data.resultCode === 0){
           dispatch(setUsersStatus(message))
        }

       

        //  this.props.setUsers(res.data.items);
        //  this.props.setPlaceHold(false);
  
  }
}