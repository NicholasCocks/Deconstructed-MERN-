import * as QuestionsUtil from '../util/questions_util';

export const RECEIVE_ALL_DATA = "RECEIVE_ALL_DATA"

const receiveAllData = data => ({
    type: RECEIVE_ALL_DATA,
    data
});

// thunk action creator
export const fetchAllData = () => dispatch => {
    return QuestionsUtil.fetchAllData().then(data => dispatch(receiveAllData(data)))
};