import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  debugger;
  return axios.post('/api/users/signup', userData);
};

export const login = (userData) => {
  debugger; 
  return axios.post('/api/users/login', userData);
};