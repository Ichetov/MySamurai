import {header} from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED';

let initState = {
  initialized: false,
}

export const appReducer = (state=initState, action)=>{
 switch(action.type){
  case SET_INITIALIZED:
    return {...state, initialized: true}
    default:
    return state
 }
}


export const setInitialZed = ()=>({
  type: SET_INITIALIZED,
})

export function initializeApp() {
 return async (dispatch) => {
 await dispatch(header());
 await dispatch(setInitialZed())
}
}