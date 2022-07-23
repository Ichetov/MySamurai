import { Component } from 'react';
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Loading from '../components/common/Loading';
import React from 'react';
let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};



export const withAutchRedirect = (Components)=>{

  class RedirectComponent extends Component{
    render(){

      if (this.props.isAuth === false) {
     
   return <Navigate to="/login" />;
 }
 return <Components {...this.props}/>
    }
  }

  let redirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  
  return redirectComponent;
}


export const withMy = (Components)=>{

 let wrapper = (props)=>{
    return <React.Suspense fallback={<Loading/>}><Components {...props}/></React.Suspense> 
 } 
 return wrapper
}