import s from './Message.module.css'

const Message = (props) => {
  return <div className={s.dialogs__messagesItem}>{props.message}</div>;
};

export default Message