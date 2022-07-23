
import {next, naz, toggleIsFollowingProgress, follow,setUsers, addPostTextAction,scurrentPage, userCount,placeHold, gets,unfollow } from "./../../redux/users-reduser";
import { Component } from "react";
import * as axios from "axios";
import UsersFunc from "./UsersFunc";
import { connect } from "react-redux";

import Loading from './../common/Loading';
import { userUPI } from "./../../api/api";
import { getUsersSuper, getPageSize, getTotalUserCount, getCurrentPage, getPlaceholder, getFollowingInProgress } from "../../redux/usersSelectors";


class UsersC extends Component {
  // constructor(props) {
  //   super(props);
  // this.getUsers = this.getUsers.bind(this);
  // }


  componentDidMount(){

  console.log('2222');
  
    // this.props.setPlaceHold(true);
  //  axios(
  //    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
  //    {
  //      withCredentials: true,
  //    }
  //  )
     this.props.gets(this.props.currentPage, this.props.pageSize);
    // userUPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
    //   this.props.setUsers(res.items);
    //   this.props.setUSerCount(res.totalCount);
    //   this.props.setPlaceHold(false);
    //   console.log(res);
    // });
   
  
  }



  // getUsers() {
   
  //   // if (this.props.users.length === 0) {
  //   //   axios("https://social-network.samuraijs.com/api/1.0/users").then(
  //   //     (res) => {
  //   //       this.props.setUsers(res.data.items);
  //   //     }
  //   //   );
  //   // }
  // }

  onPageChanned = (num)=>{
   this.props.curPage(num);
  this.props.gets(num, this.props.pageSize);
  // this.props.setPlaceHold(true);


  //  userUPI.getUsers(num, this.props.pageSize).then((res) => {
  //    this.props.setUsers(res.items);
  //    this.props.setPlaceHold(false);
  //  });
  }


  render() {

      return (
  
        <div>
          {
            this.props. placeholder && <Loading placeholder = {this.props. placeholder}/>}
             <UsersFunc curPage = {this.props.curPage} numb={this.props.numb} totalUserCount = {this.props.totalUserCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage} onPageChanned = {this.onPageChanned} follow = {this.props.follow} users = {this.props.users}  placeholder = {this.props. placeholder} toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress} followingInProgress = {this.props.followingInProgress} unfollow = {this.props.unfollow} next={this.props.next}
            naz = {this.props.naz}/>
          
            
     
         
        </div>
  
      );
  }
}




// const matStateToProps = (state) => {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     totalUserCount: state.usersReducer.totalUserCount,
//     currentPage: state.usersReducer.currentPage,
//     placeholder: state.usersReducer.placeholder,
//     followingInProgress: state.usersReducer.followingInProgress
//   };
// };




const matStateToProps = (state) => {

  
  return {
    numb: state.usersReducer.numb,
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    placeholder: getPlaceholder(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


// function mapDispatchToProps(dispatch) {
//   return {
//     unfollow: (id) => {
//       dispatch(unfollowAC(id));
//     },
//     follow: (id) => {
//       dispatch(followAC(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     curPage: (num)=>{
//       dispatch(scurrentPage(num));
//     },
//     setUSerCount: (total)=>{
//       dispatch(userCount(total))
//     },
//     setPlaceHold: (bul)=>{
//     dispatch(placeHold(bul));
//     }
//   };
// }





const UsersConteiner = connect(matStateToProps, {
  gets,
  unfollow,
  follow,
  setUsers,
  toggleIsFollowingProgress,
  curPage: scurrentPage,
  setUSerCount: userCount,
  setPlaceHold: placeHold,
  next,
  naz
})(UsersC);

export default UsersConteiner;
