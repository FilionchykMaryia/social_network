import * as axios from 'axios';


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "41b1ab48-76ae-4530-b693-d80197826da6"
  },
})
//получаем всех пользоватетлей
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
  },
  //подписаться на user
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  //отписаться
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  }
}
//получаем profile по userId
// export const profileARI = {
//   getProfile(userId = 2){
//     return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//     .then(response => response.data);
//   }
// } 



// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
//   .then(response => response.data);
// }
