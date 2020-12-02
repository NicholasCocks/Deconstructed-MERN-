import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}

export default questionsReducer;