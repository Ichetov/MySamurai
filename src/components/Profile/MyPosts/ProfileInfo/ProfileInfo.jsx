import s from './ProfileInfo.module.css'
import Loading from './../../../common/Loading';
import ava from './../../../../assets/images/ava.jpg'

import ProfileStatusWitchHoocs from "./ProfileStatusWitchHoocs";

const ProfileInfo = ({ profile, upDateStatus, status }) => {
  if (!profile) {
    return <Loading />;
  }

  return (
    <div>
      {/* <div>
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Moraine_Lake_Sunrise_%287960461442%29.jpg/980px-Moraine_Lake_Sunrise_%287960461442%29.jpg"
          alt=""
        />
      </div> */}
      <div className={s.wrap}>
        <img src={profile.photos.large !== null ? profile.photos.large : ava} />
        {profile.fullName}
      </div>
      <ProfileStatusWitchHoocs status={status} upDateStatus={upDateStatus} />
    </div>
  );
};

export default ProfileInfo;