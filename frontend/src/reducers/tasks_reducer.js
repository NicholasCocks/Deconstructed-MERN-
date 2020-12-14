import { RECEIVE_ALL_TASKS, RECEIVE_TASK } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            debugger
            return {...state, [action.task._id]: action.task};
        default:
            return state;
    }
}

export default tasksReducer;