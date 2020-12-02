import {
    RECEIVE_ALL_DATA
} from '../actions/question_actions';

const dataclassReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_DATA:
            return action.dataclasses;
        default:
            return state
    }
}

export default dataclassReducer;