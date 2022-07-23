 import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from "./DialogItem/DialogItem";

import { useEffect } from 'react';
import { reduxForm, Field } from "redux-form";
import { Textarea } from '../common/FormConntrol/FormsControls';
import {requiredField, maxLengthCreator} from './../../utils/validators/validators'

let maxLength10 = maxLengthCreator(50)
const DialogsForm = (props)=>{

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="messageText"
          component={Textarea}
          placeholder="Введиту сообщение"
          validate={[requiredField, maxLength10]}
          // onChange={(e) => props.onNewMessageChange(e.target.value)}
          // value={props.messageText}
        />
      </div>
      <div>
        <button>Добавить</button>
      </div>
    </form>
  );
}

// onClick={props.onSendMessageClick}
const DialogsReduxForm = reduxForm({
  form: "dialogs",
})(DialogsForm);


const Dialogs = ({ dialogsName, dialogsMessage,messageText, onNewMessageChange, onSendMessageClick,isAuth }) => {
  // const textRef = useRef()
console.log('Dialogs');

  // let onNewMessageChange = (e) => {
  //   dispatch(addNewMessage(e.target.value));
  // };

  // let onSendMessageClick = () => {
  //   dispatch(addMessageAction());
  // };
  // const navigate = useNavigate();
 const onSubmit = (formData) => {
   console.log(formData.messageText);
   onSendMessageClick(formData.messageText);
 };

  return (
    <div className={s.dialogs}>
      {}

      <div className={s.dialogs__items}>
        {dialogsName.map((item) => {
          return <DialogItem key={item.id} name={item.name} id={item.id} />;
        })}
      </div>
      <div className={s.dialogs__messages}>
        {dialogsMessage.map((item) => {
          return <Message key={item.id} message={item.message} />;
        })}
      </div>

      <DialogsReduxForm onSubmit = {onSubmit}/>
    </div>
  );
};


export default Dialogs;