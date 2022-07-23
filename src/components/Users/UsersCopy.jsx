// import { Component } from "react";
// import * as axios from "axios";
// import UsersFunc from "./UsersFunc";


// export default class UsersC extends Component {
//   // constructor(props) {
//   //   super(props);
//   // this.getUsers = this.getUsers.bind(this);
//   // }


//   componentDidMount(){
//    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
//      this.props.setUsers(res.data.items);
//      this.props.setUSerCount(res.data.totalCount);
//      console.log(res);
     
//    })
   
  
//   }



//   getUsers() {
   
//     // if (this.props.users.length === 0) {
//     //   axios("https://social-network.samuraijs.com/api/1.0/users").then(
//     //     (res) => {
//     //       this.props.setUsers(res.data.items);
//     //     }
//     //   );
//     // }
//   }

//   onPageChanned = (num)=>{
//    this.props.curPage(num);
//    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`).then((res) => {
//      this.props.setUsers(res.data.items);
//    });
//   }


//   render() {

//       return (
  
//         <div>
//           <UsersFunc totalUserCount = {this.props.totalUserCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage} onPageChanned = {this.onPageChanned} unfollow = {this.props.unfollow} follow = {this.props.follow} users = {this.props.users}  />
//         </div>
  
//       );
//   }
// }