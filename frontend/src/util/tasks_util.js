import axios from 'axios';

export const fetchAllTasks = data => {
     ;
    return axios.get(`/api/tasks/${data}`);
}

// export const fetchTask = taskId => {
//     return axios.get(`api/tasks/${taskId}`);
// }

export const deleteTask = data => {
    return axios.delete(`/api/tasks/${data._id}`);
}

export const updateTask = data => {
    debugger
    return axios.patch(`api/tasks/${data._id}`, data.data)
}