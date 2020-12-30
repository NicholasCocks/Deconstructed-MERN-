import axios from 'axios';

export const updateDB = data => {
  return axios.patch('/api/questions/seed', data)
}