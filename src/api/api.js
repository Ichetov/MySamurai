
import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
headers: {
  "API-KEY": "e0744a1c-b6c5-495b-833f-c38dd8401e35",
},
baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userUPI = {
getUsers(currentPage, pageSize){
  return instance.get(
     `users?page=${currentPage}&count=${pageSize}`,
   ).then(res => res.data)
},


}


export const uffolowAPI = {
unfollowed(id) {
 
    return instance.delete(`follow/${id}`)
      .then(res => res.data)
  },


  followed(id) {
    return instance.post(`follow/${id}`)
      .then(res => res.data)
  }
}

 
export const headerAPI ={

    header() {
      return instance.get(`auth/me`)
        .then(res => res.data)
    },

}

export const profileAPI = {
  profile(id){
    return instance.get(`profile/${id}`)
    .then(res=>res.data)
  },
  getStatus(id){
     return instance.get(`profile/status/${id}`)
     
  },
  updateStatus(status){
return instance.put(`profile/status`, {
  status: status
})   
  }
}



export const loginAPI = {
  posLogin(data){
  
    return instance.post(`auth/login`,{
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe
    })
    .then(res=>res.data)
  },

  logout(){
  return instance.delete(`auth/login`);
  }
}
