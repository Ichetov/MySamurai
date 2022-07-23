import { Navigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormConntrol/FormsControls";
import {requiredField, maxLengthCreator} from './../../utils/validators/validators';
import s from "./../common/FormConntrol/FormController.module.css";

let maxLength10 = maxLengthCreator(20);

export  const LoginForm = (props)=>{



  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLength10]}
          name="email"
          placeholder="Login"
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[requiredField, maxLength10]}
          name="password"
          placeholder="Password"
          component={Input}
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component={Input} />
        remember me
      </div>
      {
       props.error && <div className={s.formSummaryError}>
        Error
      </div>
      }
    
      <div>
        <button>login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);


export const Login = ({ posLog, isAuth }) => {
  const onSubmit = (formData) => {
 
  
    posLog(formData);
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

