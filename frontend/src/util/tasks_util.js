import axios from 'axios';

export const fetchAllTasks = data => {
    // debugger;
    return axios.get(`/api/tasks/${data}`);
}

// export const fetchTask = taskId => {
//     return axios.get(`api/tasks/${taskId}`);
// }

export const deleteTask = data => {
    return axios.delete(`/api/tasks/${data.id}`, data.data);
}

// export const createTask = data => {
//     return axios.get(`api/tasks/${data.id}`)
// }