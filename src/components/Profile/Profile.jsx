
import c from "./Profile.module.css";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPosts/MyPostContainer";
import Mix from './Mix';




const Profile = ({ profile, upDateStatus, status}) => {

 console.log('44444444');



  return (
    <div>
      <ProfileInfo profile={profile} upDateStatus={upDateStatus} status = {status} />

      <MyPostContainer />
      <Mix/>
    </div>
  );
};

export default Profile;
