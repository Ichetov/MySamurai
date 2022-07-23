import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import stor from './redux/state';
import {store} from './redux/redux-store'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'


 let root = ReactDOM.createRoot(document.getElementById('root'));
 


root.render(

    <BrowserRouter>
  <Provider store = {store}>
    <App  />
  </Provider> 
      </BrowserRouter>
);



// store.subscribe(rerenderEntree)

// store.subscribe(()=>{
//   let state = store.getState()
//   rerenderEntree(state)
// })


// rerenderEntree(store.getState())



// store = {
//   store
// }
// state = {
//   state
// }
// dispatch = {
//   store.dispatch.bind(store)
// }
