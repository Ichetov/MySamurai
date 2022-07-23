import {loginAPI} from './../api/api';



const LOGIN_USER = 'LOGIN_USER';


const initialState = {
  log: false
}


export const loginReducer = (state=initialState, action)=>{
 switch(action.type){
  case LOGIN_USER:
    return {...state, log: true}
    default:
      return state
 }
}



export const accecLogin = () => ({
  type: LOGIN_USER,

});




export const posLog = (data)=>{

  return async (dispatch)=>{
   let res = await loginAPI.posLogin(data);

      if (res.resultCode === 0){
     
        dispatch(accecLogin())
      }

  

  }
}


