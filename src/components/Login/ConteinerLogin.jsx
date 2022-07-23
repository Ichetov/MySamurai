import { Login } from "./Login";
import { connect } from "react-redux";
import {posLog} from './../../redux/auth-reducer'


const mapStateToProps = (state) => {

  return {
    isAuth: state.authReducer.isAuth,
  };
};



export default connect(mapStateToProps, { posLog })(Login);