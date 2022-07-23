import { headerAPI,loginAPI } from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const SET_MY = 'SET_MY';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    my: {}
  }

export const authReducer = (state = initialState, action) => {
  switch(action.type){
   case SET_USER_DATA:
    return {...state, isAuth: true, ...action.data}
   
    case SET_MY:

      return {...state, my: action.data}
 
  default:
    return state
  }
}



export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
 data: {
   id,
   email,
   login,
   isAuth
 
 }

});

export const setMy = (data) => ({
  type: SET_MY,
  data

});


export const header = ()=>{

  return async (dispatch)=>{
        let res = await headerAPI.header();
        if (res.resultCode === 0){
           dispatch(setUserData(
             res.data.id,
             res.data.email,
             res.data.login,
             true
           ));
        }
        
        // .then((res) => {
        //     if (res.resultCode === 0) {
        //       dispatch(setUserData(
        //         res.data.id,
        //         res.data.email,
        //         res.data.login,
        //         true
        //       ));
        //     }

        //   })
  }
  
}



export const posLog = (data) => {


  return (dispatch) => {

    loginAPI.posLogin(data)  
      .then(res => {       
        if (res.resultCode === 0) {
         dispatch(header());
        }else{
          
         let message = res.messages.length > 0 ? res.messages[0] : 'Common error';
          dispatch(stopSubmit('login', {
            _error: message
          }))
        }

      })
  }
}



export const logOut = () => {
 

  return (dispatch) => {
    loginAPI.logout()
      .then(res => {
 
        if (res.data.resultCode === 0) {
          console.log('ok');
          
           dispatch(setUserData(
             null,
             null,
             null,
             false
           ));
        }

      })
  }
}
