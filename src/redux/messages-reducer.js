const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  myPosts: [{
      id: 1,
      message: "Привет, как дела?",
      like: 10
    },
    {
      id: 2,
      message: "Привет, всё хорошо!)",
      like: 20
    },
  ],
  postText: 'it-kamasutra.com',
}



export const messageReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
       let newPost = {
        id: 5,
        message: action.post,
        like: 0
      }
      
      return {
        ...state,
        myPosts: [...state.myPosts, newPost],
      }
    case UPDATE_NEW_POST_TEXT:
       
      return {
        ...state,
        postText: action.text
      }
      default:
      return state;
  }


}

export const addPostAction = (post) => ({
  type: ADD_POST,
  post
});

export const addPostTextAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});
