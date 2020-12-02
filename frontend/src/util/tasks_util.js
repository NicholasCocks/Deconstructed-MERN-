import axios from 'axios';

export const fetchAllTasks = () => {
    return axios.get('api/tasks');
}

export const fetchTask = taskId => {
    return axios.get(`api/tasks/${taskId}`);
}