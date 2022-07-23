
import {userUPI, uffolowAPI} from './../api/api'
import {mapFunc} from './../utils/helper'



const UNFOLLOW = 'UNFOLLOW';

const FOLOOW = 'FOLOOW';

const SETUSERS = 'SETUSERS';

const CURRENTPAGE = 'CURRENTPAGE';

const USERCOUNT = 'USERCOUNT';

const PLACEHOLD = 'PLACEHOLD';

const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const NEXT = 'NEXT';
const NAZ = 'NAZ';

let initialState = {
   users: [
 
   ],
pageSize: 5,
totalUserCount: 0,
currentPage: 1,
placeholder: false,
followingInProgress: [],
numb: 0
}



export const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLOOW:
      //  let id = state.users.findIndex(item=>{
      //    if(item.id === action.id){
      //     return true;
      //    }
      //  })

      return {...state, users: mapFunc(state.users, action.id, 'id', {followed: true})
        
      //   state.users.map(item=>{
      //     if(item.id === action.id){
      //       return {...item, followed: true}
      //     }
      //     return item
      // })
    
    }
    case NEXT:
      return {...state, numb: action.num}

    case NAZ:
      return {...state, numb: action.num}

    case UNFOLLOW:
       
      return {
       ...state, users: mapFunc(state.users, action.id, 'id', {
         followed: false
       })
       
       
      //  state.users.map(item=>{
      //     if(item.id === action.id){
      //       return {...item, followed: false}
      //     }
      //     return item
      //  })
      }

      case SETUSERS:

      return {
       ...state, users: action.users
      }


      case CURRENTPAGE:
        return {...state, currentPage: action.num}

       case USERCOUNT:
        return {...state, totalUserCount: action.cont}

       case PLACEHOLD:
        return {...state, placeholder: action.bul}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
          return {
            ...state,
            followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(item => {
              return item !== action.id
            }) 
          }

      default:
      return state;
  }


}

export const next = (num)=>({
  type: NEXT,
  num
})

export const naz = (num) => ({
  type: NAZ,
  num
})

export const acceptFollow = (id) => ({
  type: FOLOOW, id
});

export const acceptUnfollow = (id) => ({
  type: UNFOLLOW, id

});

export const setUsers = (users) => ({
  type: SETUSERS,
  users

});


export const scurrentPage = (num) => ({
  type: CURRENTPAGE,
  num

});


export const userCount = (cont) => ({
  type: USERCOUNT,
  cont

});

export const placeHold = (bul) => ({
  type: PLACEHOLD,
  bul
});

export const toggleIsFollowingProgress = (id, isFetching)=>({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  id,
  isFetching
})



export const gets = (currentPage, pageSize) => {
 return (dispatch)=>{
  dispatch(placeHold(true));
  userUPI.getUsers(currentPage, pageSize)
  .then(res => {
    dispatch(setUsers(res.items));
   dispatch(userCount(res.totalCount));
   dispatch(placeHold(false));
  })
 }
}


  async function followUnflow(dispatch, id, apiMethod, actionCreator){
    dispatch(toggleIsFollowingProgress(id, true));
    let res = await apiMethod(id)
    if (res.resultCode === 0) {
      dispatch(actionCreator(id));
    }
    dispatch(toggleIsFollowingProgress(id, false));
}


export const unfollow = (id)=>{

  return async (dispatch)=>{

     let apiMethod = uffolowAPI.unfollowed.bind(uffolowAPI)
     let actionCreator = acceptUnfollow;

     followUnflow(dispatch, id, apiMethod, actionCreator)
      
    //  dispatch(toggleIsFollowingProgress(id, true));
    //   let res = await apiMethod(id) 
    //      if (res.resultCode === 0) {
    //       dispatch(actionCreator(id));
    //      }
    //      dispatch(toggleIsFollowingProgress(id, false));
  
  }
}



export const follow = (id) => {

  return async (dispatch) => {
    let apiMethod = uffolowAPI.followed.bind(uffolowAPI)
    let actionCreator = acceptFollow;

    followUnflow(dispatch, id, apiMethod, actionCreator)

    // dispatch(toggleIsFollowingProgress(id, true));
    //    let res = await apiMethod(id)
    //   if (res.resultCode === 0) {
    //     dispatch(actionCreator(id));
    //   }
    //   dispatch(toggleIsFollowingProgress(id, false));

  }
}

