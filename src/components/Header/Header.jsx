import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

 const Header = (props)=>{
  
  return (
    <header className={s.header}>
      <img
        src="https://e7.pngegg.com/pngimages/106/702/png-clipart-fizzy-drinks-coca-cola-pepsi-diner-pepsi-kitchen-text-thumbnail.png"
        alt=""
      />
      <div className={s.loginBlock}>
        {props.data.isAuth ? (
          <div>
            <div>{props.data.login} - <button onClick={props.logOut}>Logaut</button></div>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;