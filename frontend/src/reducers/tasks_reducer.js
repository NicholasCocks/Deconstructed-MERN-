import { 
    RECEIVE_ALL_TASKS, 
    RECEIVE_TASK,
    REMOVE_TASK,
    UPDATE_TASK 
} from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            return {...state, [action.task._id]: action.task};
        case UPDATE_TASK:
            return { ...state, [action.data._id]: action.data };
        case REMOVE_TASK:
            delete newState[action.taskId]
            return newState
        default:
            return state;
    }
}

export default tasksReducer;