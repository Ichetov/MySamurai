
import { Component } from 'react';
import Profile from './Profile';
import * as axios from "axios";
import { connect } from 'react-redux';
// import {setUsersProfile} from './../profileReducer'
import { profilee, setUsersProfile, getStatus,upDateStatus } from "./../../redux/profile-reducer";
import withRouter from './withRouter'
import { profileAPI } from '../../api/api';
import { Navigate } from "react-router-dom";
import { withAutchRedirect } from '../../hoc/withAutchRedirect';
import { compose } from 'redux';

class ProfileConteiner extends Component {

  
   
  componentDidMount(){
    let id;
    if (this.props.router.userId) {
      id = this.props.router.userId;
    } else {
      id = this.props.userId;
    }
      this.props.profilee(id)
      this.props.getStatus(id)
  //     axios(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then((res) => {
  //     this.props.setUsersProfile(res.data)
        
  //   //  this.props.setUsers(res.data.items);
  //   //  this.props.setPlaceHold(false);
  //  });
  }



  render() {


    return(
      <>
      <Profile {...this.props}/>
      </>
    )
  }
}


// const redirectComponent = (props)=>{
//  if (props.isAuth === false) {
//    return <Navigate to="/login" />;
//  }
//   return <ProfileConteiner {...props}/>;
// }

// const mapStateToPropsForRedirect = (state) => ({
//   isAuth: state.authReducer.isAuth,
// });

// let redirectComponent = withAutchRedirect(ProfileConteiner);

// redirectComponent = connect(mapStateToPropsForRedirect)(redirectComponent);



const mapStatetoProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  userId: state.authReducer.id,
  isAuth: state.authReducer.isAuth,
});

// let WithUrl = withRouter(redirectComponent);

// const ProfileCont = connect(mapStatetoProps, {
//   setUsersProfile,
//   profilee
// })(WithUrl);
 




export default compose(
  connect(mapStatetoProps, {
    setUsersProfile,
    profilee,
    getStatus,
    upDateStatus,
  }),
  withAutchRedirect,
  withRouter,
)(ProfileConteiner);
