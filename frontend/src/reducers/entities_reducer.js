import { combineReducers } from "redux";
import questions from './questions_reducer';
import dataclass from './dataclass_reducer';
import tasks from './tasks_reducer';

export default combineReducers({
    questions,
    dataclass,
    tasks
})