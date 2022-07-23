import Frends from "./Frends";

import { connect } from "react-redux";


const matStateToProps = (state)=>{
  return {
    myFrendsReducer: state.myFrendsReducer
  };
}




const FrendsComponent = connect(matStateToProps)(Frends);

export default FrendsComponent;
