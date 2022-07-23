import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import FrendsComponent from './Frends/FrendsComponent';

 const NavBar = (props)=>{


  return (

      
    <div className = {classes.nav}>
   
   <nav>
       <div className = {classes.item}><NavLink className={({isActive})=> isActive ? classes.active : ''}  to="/profile">Profile</NavLink></div>
       <div className = {classes.item}><NavLink className={({isActive})=> isActive ? classes.active : ''} to="/dialogs">Message</NavLink></div>
   
       <div className = {classes.item}><a>News</a></div>
       <div className = {classes.item}><a >Settings</a></div>
         <div className = {classes.item}><NavLink className={({isActive})=> isActive ? classes.active : ''} to="/users">Users</NavLink></div>
     </nav> 
       
     <FrendsComponent/>
     </div>
  )
}

export default NavBar;