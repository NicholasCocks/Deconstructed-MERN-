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
    task: data.task,
    user: data.user
});

const removeTask = ({ data }) => ({
    type: REMOVE_TASK,
    taskId: data.taskId,
    user: data.user
})

export const fetchAllTasks = data => dispatch => (  
    TasksUtil.fetchAllTasks(data)
        .then(res => dispatch(receiveAllTasks(res)))
);

// export const fetchTask = () => dispatch => {
//     return TasksUtil.fetchTask()
//         .then(task => dispatch(receiveTask(task)))
// };

export const createTask = data => dispatch => (
    TasksUtil.createTask(data)
        .then(res => dispatch(receiveTask(res)))
)

export const updateTask = data => dispatch => {
    //    
    return TasksUtil.updateTask(data)
        .then(res => {
            //    
            dispatch(receiveTask(res))}
        )
}

export const deleteTask = taskId => dispatch => {
    return TasksUtil.deleteTask(taskId)
        .then((res) => dispatch(removeTask(res)))
}
