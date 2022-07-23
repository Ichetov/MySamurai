import{createSelector} from 'reselect'


export const getUsers = (state)=>{
  return state.usersReducer.users
}


export const getUsersSuper = createSelector(getUsers, (users) => {
   return users
})



export const getPageSize = (state) => {
  return state.usersReducer.pageSize
}


export const getTotalUserCount = (state) => {
  return state.usersReducer.totalUserCount
}


export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage
}


export const getPlaceholder = (state) => {
  return state.usersReducer.placeholder
}

export const getFollowingInProgress = (state) => {
  return state.usersReducer.followingInProgress
}