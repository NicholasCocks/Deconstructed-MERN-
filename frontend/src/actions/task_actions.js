import * as TasksUtil from '../util/tasks_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";

const receiveAllTasks = ({ data }) => ({
    type: RECEIVE_ALL_TASKS,
    tasks: data
});

const receiveTask = ({ data }) => ({
    type: RECEIVE_TASK,
    task: data
});

// thunk action creator
export const fetchAllTasks = () => dispatch => {
    return TasksUtil.fetchAllTasks()
        .then(tasks => dispatch(receiveAllTasks(tasks)))

};
export const fetchTask = () => dispatch => {
    return TasksUtil.fetchTask()
        .then(task => dispatch(receiveTask(task)))
};