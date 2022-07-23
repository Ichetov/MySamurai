import st from './Users.module.css';
import * as axios from 'axios';
import avatar from './../../assets/images/ava.jpg'

const Users = ({ users, follow, unfollow, setUsers }) => {
  let getUsers = ()=>{
    if(users.length === 0){

  axios('https://social-network.samuraijs.com/api/1.0/users')
  .then(res =>{

   setUsers(res.data.items)

  })
  }



// setUsers([   {id: 1,photoUrl:'https://avatars.mds.yandex.net/i?id=847504c586a72d42e7b293caa0bb551f_sr-2352943-images-thumbs&n=13', followed: false, fullName: 'Dmitry', status: 'Я отдыхаю', location:{city: 'Minsk', country: 'Belorus'}},
//       {id: 2,photoUrl:'https://avatars.mds.yandex.net/i?id=847504c586a72d42e7b293caa0bb551f_sr-2352943-images-thumbs&n=13',followed: true, fullName: 'Ivan', status: 'Я сплю', location:{city: 'Moskow', country: 'Russia'}},
//       {id: 3,photoUrl:'https://avatars.mds.yandex.net/i?id=847504c586a72d42e7b293caa0bb551f_sr-2352943-images-thumbs&n=13', followed: false, fullName: 'Igor', status: 'Занимаюсь спортом', location:{city: 'Берлин', country: 'Германия'}},
//       {id: 4,photoUrl:'https://avatars.mds.yandex.net/i?id=847504c586a72d42e7b293caa0bb551f_sr-2352943-images-thumbs&n=13', followed: false, fullName: 'Alex', status: 'На работе', location:{city: 'Гомель', country: 'Belorus'}},])
}




  return (
    <>
      <button onClick={getUsers}>GetUsers</button>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <span>
              <div>
                <img
                  className={st.userImg}
                  src={item.photos.small !== null ? item.photos.small : avatar}
                  alt=""
                />
              </div>
              <div>
                {item.followed ? (
                  <button onClick={() => unfollow(item.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => follow(item.id)}>Follow</button>
                )}
              </div>
            </span>

            <span>
              <span>
                <div>{item.name}</div>
                <div>{item.status}</div>
              </span>
              <span>
                {/* <div>{item.location.city}</div>
              <div>{item.location.country}</div> */}
              </span>
            </span>
          </div>
        );
      })}
    </>
  );
};



export default Users;