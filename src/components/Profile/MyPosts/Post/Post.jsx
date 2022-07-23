import c from "./Post.module.css";

const Post = ({message, like}) => {
  return (
          <div className={c.item}>
          <img src="https://i.pinimg.com/originals/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg" alt="" />
          {message}
          <div>
            <span>likes-{like}</span>
          </div>
          </div>
  );
};

export default Post;
