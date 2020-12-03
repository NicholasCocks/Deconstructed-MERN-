import axios from 'axios';

// export const fetchAnswers = () => {
//     return axios.get('api/users', userData)
// }
  
export const updateAnswers = (data) => {
    debugger;
    return axios.patch(`/api/users/${data.id}`, data.data)
}