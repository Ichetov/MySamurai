import './App.css';
import React  from 'react';
// import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import DialogsComonent from './components/Dialogs/DialogsComponent';
import UsersConteiner from './components/Users/UsersConteiner';
// import ProfileCont from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderConteiner';
import HeaderCon from './components/Header/HeaderConteiner';
import { Login } from './components/Login/Login';
import ConteinerLogin from './components/Login/ConteinerLogin';
import { Component } from 'react';
import { initializeApp} from './redux/app-reducer'
import { connect } from "react-redux";
import { compose } from "redux";
import withRouter from "./components/Profile/withRouter"
import Loading from './components/common/Loading';
import {withMy } from './hoc/withAutchRedirect'
// import { React } from 'react';
const DialogsComonent = React.lazy(() => import('./components/Dialogs/DialogsComponent'));
const ProfileCont = React.lazy(() => import('./components/Profile/ProfileConteiner'));


class App extends Component {


  componentDidMount() {
  
   this.props.initializeApp()
        
          //    headerAPI.header().then((res) => {
          //   if (res.resultCode === 0) {
          //     this.props.setUserData(
          //       res.data.id,
          //       res.data.email,
          //       res.data.login
          //     );
          //   }

          // })

        }


render(){
  if (!this.props.initialized){
     return <Loading/>
  }
 
  return (
    <div>

    <div className="app-wrapper">
   <HeaderCon />
    <NavBar {...this.props}/>
    <div className = 'app-wrapper-content'>
    <Routes>
    <Route path = '/profile/:userId' element = {<React.Suspense fallback={<Loading/>}><ProfileCont/></React.Suspense>}/>
    <Route path = '/profile' element = {<React.Suspense fallback={<Loading/>}><ProfileCont/></React.Suspense>}/>
     {/* <Route path = '/profile' element = {<ProfileCont />}/> */}
    <Route path = '/dialogs/*' element = {
      <React.Suspense fallback={<Loading/>}><DialogsComonent/></React.Suspense>
    }/>
     {/* <Route path = '/dialogs/*' element = {
      <DialogsComonent/>
    }/> */}

    <Route path = '/users' element = {<UsersConteiner/>}/>

    <Route path = '/login' element = {<ConteinerLogin/>}/>

    </Routes> 
      
    </div>
    
    </div>

   </div>
  );
}
  
}


const mapStateToProps = (state)=>{
return{
  initialized: state.appReducer.initialized
}
}


export default compose(withRouter, connect(mapStateToProps, {
  initializeApp
}))(App);
