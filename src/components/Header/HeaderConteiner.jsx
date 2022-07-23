import * as axios from "axios";
import { Component } from "react";
import Header from "./Header";
import { setUserData, setMy } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { header, logOut } from "./../../redux/auth-reducer";

class HeaderContainer extends Component {

//   componentDidMount() {
// console.log('шлю');

//   this.props.header();
    
    //    headerAPI.header().then((res) => {
    //   if (res.resultCode === 0) {
    //     this.props.setUserData(
    //       res.data.id,
    //       res.data.email,
    //       res.data.login
    //     );
    //   }

//     // })

//   }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state)=>{
  return {
    data: state.authReducer,
    my: state.authReducer.my,
  };
}


let HeaderCon = connect(mapStateToProps, { header, setMy, logOut })(
  HeaderContainer
);

export default HeaderCon