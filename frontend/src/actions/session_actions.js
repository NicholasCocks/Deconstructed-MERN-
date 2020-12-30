import * as APIUtil from '../util/session_api_util';
import * as AnswersUtil from '../util/answers_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const receiveAnswers = ({ data }) => ({
    type: RECEIVE_ANSWERS,
    user: data
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

const receiveUser = ({ data }) => ({
    type: RECEIVE_USER,
    user: data
});

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        })
        .catch((err) => dispatch(receiveErrors(err.response.data))
)};

export const login = user => dispatch => {
  
    return APIUtil.login(user).then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
        })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
};

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
        // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
        // Dispatch a logout action
    dispatch(logoutUser())
};

export const updateAnswers = data => dispatch => {
    return AnswersUtil.updateAnswers(data)
        .then(res => dispatch(receiveAnswers(res)));
};


export const loginDemoUser = user => dispatch => {
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
}

export const fetchUser = userId => dispatch => {
       
    return APIUtil.fetchUser(userId)
        .then(res => dispatch(receiveUser(res)))
}