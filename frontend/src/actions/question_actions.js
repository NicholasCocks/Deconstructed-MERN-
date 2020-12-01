import * as QuestionsUtil from '../util/questions_util';

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_ALL_DATA = "RECEIVE_ALL_DATA"

const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_DATA,
    questions
});

const receiveAllData = data => ({
    type: RECEIVE_ALL_DATA,
    data
});

// thunk action creator
export const fetchAllQuestions = () => dispatch => {
    return QuestionsUtil.fetchAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)))
};
export const fetchAllData = () => dispatch => {
    return QuestionsUtil.fetchAllData()
    .then(data => dispatch(receiveAllData(data)))
};