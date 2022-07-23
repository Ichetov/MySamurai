

import { useParams } from "react-router-dom";


function withRouter(Component){
  console.log('выхожу');
  
  function WithRouterProp(props){
    let params = useParams();
  return(
    <Component
    {...props}
    router = {params}
    />
  )
  }
  return WithRouterProp
}

export default withRouter;