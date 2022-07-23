import c from "./MyPost.module.css";
import Post from "./Post/Post";
import {Component, useRef} from 'react';
import {addPostAction, addPostTextAction} from './../../../redux/messages-reducer';
import { reduxForm, Field } from "redux-form";
import { requiredField,maxLengthCreator} from './../../../utils/validators/validators'
import { Textarea } from './../../common/FormConntrol/FormsControls';

let maxLength10 = maxLengthCreator(10)
const MyPostForm = (props)=>{
// let inpRef = useRef();

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={c.mop}>
        {" "}
        <Field
          name="text"
          component={Textarea}
          validate={[requiredField, maxLength10]}
          placeholder="эй"
          // ref={inpRef}
        />
        <div>
          <button>Добавить</button>
        </div>
      </div>
    </form>
  );
}





const MyPostRedux = reduxForm({
  form: "post",
})(MyPostForm);

// ssageReducer, addPostTextAction, addPostAction
class MyPost extends Component {


  
  shouldComponentUpdate(nextProps, nextState) {

    // console.log(this.props.messageReducer);
    // console.log(this.props);
    
    return this.props.messageReducer !== nextProps.messageReducer;
  }

  onSubmit = (formData) => {
    this.props.addPostAction(formData.text);
  
  };
  // let { postText, myPosts } = data;
  onPostChange = (e) => {
    this.props.addPostTextAction(e.target.value);
    // dispatch(addPostTextAction(e.target.value));
  };

  render() {
 
  
    let elem = this.props.messageReducer.myPosts.map((item) => {
      return <Post key={item.id} message={item.message} like={item.like} />;
    });

    return (
      <div className={c.block}>
        <h3>post</h3>
        <MyPostRedux
          onPostChange={this.onPostChange}
          messageReducer={this.props.messageReducer}
          onSubmit={this.onSubmit}
        />
        <div>{elem}</div>
      </div>
    );
  }
};




export default MyPost;


