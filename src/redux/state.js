import {messageReducer} from './messages-reducer';
import {profileReducer} from './profile-reducer';


let store = {
  _state: {
      profilePage: {
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
  messageText: ''

  },
  messagesPage: {
    myPosts: [
   { id: 1, message: "Привет, как дела?", like:10 },
   { id: 2, message: "Привет, всё хорошо!)", like:20},
 ],
  postText: 'it-kamasutra.com'
  },
  myFrendsPage: {
       myFrends: [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Henry"},
    {id: 4, name: "Genry"},
    {id: 5, name: "Masha"},
  ],


  
}
  },
  _subscribe(){
    console.log('Нет');
    
  },

getState(){
 return this._state
},

subscribe(observer) {
 this._subscribe = observer;
},


dispatch(action) {
this._state.messagesPage = messageReducer(this._state.messagesPage, action);
this._state.profilePage= profileReducer(this._state.profilePage, action);
this._subscribe(this.getState())
//  if (action.type === ADD_POST) {
//       let newPost = {
//         id: 5,
//         message: this._state.messagesPage.postText,
//         like: 0
//       }
//       this._state.messagesPage.myPosts.push(newPost)
//       this._state.messagesPage.postText = ''
//       this._subscribe(this.getState())
//  } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.messagesPage.postText = action.text
//     this._subscribe(this.getState())
//  } else if (action.type === UPDATE_NEW_MESSAGE) {
//      this._state.profilePage.messageText = action.messageText;
//       this._subscribe(this.getState())
//  }else if(action.type === ADD_MESSAGE){
//     const newMessage = {
//       id: 4, message: this._state.profilePage.messageText
//     }
//     this._state.profilePage.dialogsMessage.push(newMessage);
//     this._state.profilePage.messageText = '';
//      this._subscribe(this.getState())
//  }
}

// addPost(){
//   let newPost = {
//     id: 5,
//     message: this._state.messagesPage.postText,
//     like: 0
//   }
//   this._state.messagesPage.myPosts.push(newPost)
//   this._state.messagesPage.postText = ''
//   this._subscribe(this.getState())
// },
// addPostText(text){
//   this._state.messagesPage.postText = text
//   this._subscribe(this.getState())
// },
}








export default store;

// let state = {

//   profilePage: {
//    dialogsName: [
//       {id: 1, name: "Dimych"},
//       {id:2, name:"Andrey"},
//       {id:3,name:"Sveta"},
//       {id:4, name:"Alex"}
// ],
//    dialogsMessage: [
//      {id :1, message:'Hi'},
//      {id :2, message:'Hi my'},
//      {id :3, message:'How is your'},
// ]

//   },
//   messagesPage: {
//     myPosts: [
//    { id: 1, message: "Привет, как дела?", like:10 },
//    { id: 2, message: "Привет, всё хорошо!)", like:20},
//  ],
//   postText: 'it-kamasutra.com'
//   },
//   myFrendsPage: {
//        myFrends: [
//     {id: 1, name: "Alex"},
//     {id: 2, name: "Sveta"},
//     {id: 3, name: "Henry"},
//     {id: 4, name: "Genry"},
//     {id: 5, name: "Masha"},
//   ]
 
// }


// }


// export let addPost = ()=>{
//   let newPost = {
//     id: 5,
//     message: state.messagesPage.postText,
//     like: 0
//   }
//    state.messagesPage.myPosts.push(newPost)
//    console.log(state);
//    state.messagesPage.postText = ''
//    rerenderEntree(state)
// }


// export let addPostText = (text) => {
//   state.messagesPage.postText = text
//   rerenderEntree(state)
// }




// export const subscribe = (observer)=>{
//   rerenderEntree = observer;
// }



// export default state;