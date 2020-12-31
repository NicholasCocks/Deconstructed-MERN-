import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER
} from "../actions/session_actions";
import { RECEIVE_TASK, REMOVE_TASK } from "../actions/task_actions";


const initialState = {
  isAuthenticated: false,
  user: {},
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return { isAuthenticated: false, user: {} };
    case RECEIVE_USER_SIGN_IN:
      return { ...state, isSignedIn: true };
    case RECEIVE_USER:
      return { ...state, user: action.user }
    case RECEIVE_TASK:
      return { ...state, user: action.user }
    case REMOVE_TASK:
      return { ...state, user: action.user}
    default:
      return state;
  }
}

export default sessionReducer