import * as axios from 'axios';


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ae2f88ad-182c-430b-87d9-ff56524f98b4"
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },

}



// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
//   .then(response => response.data);
// }
