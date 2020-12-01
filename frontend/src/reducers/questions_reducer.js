import { RECEIVE_ALL_DATA } from '../actions/question_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_DATA:
            return action.data;
        default: 
            return state;
    }       
}

export default questionsReducer;