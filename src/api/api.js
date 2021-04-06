import * as axios from 'axios';


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "f691a50b-473c-431b-9397-0f2b9b486e22"
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
  },
  
}



// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
//   .then(response => response.data);
// }
