import {combineReducers, legacy_createStore as createStore} from 'redux';
import {messageReducer} from './messages-reducer';
import {profileReducer} from './profile-reducer';
import {myFrendsReducer} from './myFrends-reducer';
import {usersReducer} from './users-reduser';
import {authReducer} from './auth-reducer';
import {appReducer} from './app-reducer'
import {applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {loginReducer} from './login-reduser'

let reducers = combineReducers({
messageReducer,
profileReducer,
myFrendsReducer,
usersReducer,
authReducer,
loginReducer,
form: formReducer,
appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));



// export let store = createStore(reducers, applyMiddleware(thunk));

console.log(store.getState());

