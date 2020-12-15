import axios from 'axios';

export const fetchAllTasks = data => {
    return axios.get(`/api/tasks/${data}`);
}

// export const fetchTask = taskId => {
//     return axios.get(`api/tasks/${taskId}`);
// }

export const createTask = data => (
    axios.post(`/api/tasks/${data.userId}`, data)
)

export const updateTask = data => {
    // debugger
    return axios.patch(`/api/tasks/${data._id}`)
}

export const deleteTask = taskId => {
    // debugger
    return axios.delete(`/api/tasks/${taskId}`)
}