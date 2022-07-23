
import st from "./Users.module.css";
import avatar from "./../../assets/images/ava.jpg";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { uffolowAPI } from "./../../api/api";
import {my} from './../../redux/users-reduser'
import Paginator from './Paginator'

const UsersFunc = (props)=> {




    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    // let pages = [];

    // for (let i = 1; i <= pageCount; i++) {
    //   pages.push(i);
    // }
    // let curP = props.currentPage;
    // let curPF = curP - 5 < 0 ? 0 : curP - 5;
    // let curPL = curP + 5;
    // let slicedPages = pages.slice(curPF, curPL);

console.log(props.curPage);

    return (
      <>
        <Paginator
        curPage = {props.curPage}
        numb ={props.numb}
          next ={props.next} naz = {props.naz}
          totalUserCount={props.totalUserCount}
          currentPage={props.currentPage} onPageChanned = {props.onPageChanned}
          pageSize = {props.pageSize}
        />
        {props.users.map((item) => {
          return (
            <div key={item.id}>
              <span>
                <div>
                  <NavLink to={"/profile/" + item.id}>
                    <img
                      className={st.userImg}
                      src={
                        item.photos.small !== null ? item.photos.small : avatar
                      }
                      alt=""
                    />
                  </NavLink>
                </div>
                <div>
                  {item.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (it) => it === item.id
                      )}
                      onClick={() => {
                        props.unfollow(item.id);
                        //      props.toggleIsFollowingProgress(item.id, true);
                        // // props.toggleIsFollowingProgress(item.id);
                        // uffolowAPI.unfollowed(item.id).then((res) => {
                        //   if (res.resultCode === 0) {
                        //     props.unfollow(item.id);
                        //   }
                        //     props.toggleIsFollowingProgress(item.id, false);
                        // });
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (it) => it === item.id
                      )}
                      onClick={() => {
                        props.follow(item.id);
                        // props.toggleIsFollowingProgress(item.id, true);
                        // // props.toggleIsFollowingProgress(item.id);
                        // uffolowAPI.followed(item.id).then((res) => {
                        //   if (res.resultCode === 0) {
                        //     props.follow(item.id);
                        //   }
                        //       props.toggleIsFollowingProgress(item.id, false);
                        // });
                      }}
                    >
                      Follow
                    </button>
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
}

export default UsersFunc;