import {profileReducer,addMessageAction,deletePost} from './profile-reducer';


  let state = { 
   dialogsMessage: [
     {id :1, message:'Hi'},
     {id :2, message:'Hi my'},
     {id :3, message:'How is your'},
]
  }

it('new post should be added', ()=>{
  let action = addMessageAction('it-kamasutra.com')


let newState = profileReducer(state,action);

expect(newState.dialogsMessage.length).toBe(4)
})


it('new post should be added', () => {
  let action = addMessageAction('it-kamasutra.com')


  let newState = profileReducer(state, action);


  expect(newState.dialogsMessage[3].message).toBe('it-kamasutra.com')
})



it('delete post', () => {
  let action = deletePost(1)


  let newState = profileReducer(state, action);


  expect(newState.dialogsMessage.length).toBe(2)
})


it('delete post', () => {
  let action = deletePost(100)


  let newState = profileReducer(state, action);


  expect(newState.dialogsMessage.length).toBe(3)
})
