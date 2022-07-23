
import { connect } from "react-redux";





 function Mix(){


  return(
   <>
   <h1>MIX</h1>
   </>
  )
}


const mapStateToProps = (state) => {
  
  
  return {
    initialized: state.login,
  };
};


export default connect(mapStateToProps)(Mix);