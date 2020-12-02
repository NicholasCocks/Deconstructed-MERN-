import { RECEIVE_TASK, RECEIEVE_ALL_TASKS } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            return {...state, [action.task.id]: action.task};
        default:
            return state;
    }
}

export default tasksReducer;