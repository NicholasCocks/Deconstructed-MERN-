import * as TasksUtil from '../util/tasks_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK"

const receiveAllTasks = ({ data }) => ({
    type: RECEIVE_ALL_TASKS,
    tasks: data
});

const receiveTask = ({ data }) => ({
    type: RECEIVE_TASK,
    task: data
});

const removeTask = ({ data }) => ({
    type: REMOVE_TASK,
    taskId: data
})

export const fetchAllTasks = data => dispatch => {  
    return TasksUtil.fetchAllTasks(data)
        .then(res => {
            debugger
            return dispatch(receiveAllTasks(res))})
};

// export const fetchTask = () => dispatch => {
//     return TasksUtil.fetchTask()
//         .then(task => dispatch(receiveTask(task)))
// };

export const createTask = data => dispatch => {
    debugger
    return TasksUtil.createTask(data)
        .then(res => {
            debugger
            return dispatch(receiveTask(res))})
}

export const updateTask = data => dispatch => {
    return TasksUtil.updateTask(data)
        .then(res => dispatch(receiveTask(res)))
}

export const deleteTask = data => dispatch => {
    return TasksUtil.deleteTask
        .then(res => dispatch(removeTask(res)))
}
