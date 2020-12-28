import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import { fetchUser } from '../../actions/session_actions'
import { createTask, deleteTask } from '../../actions/task_actions';
import QuestionsForm from './questions_form';

const mSTP = state => {
    return {
        user: state.session.user,
        questions: state.entities.questions,
        data: state.entities.dataclasses,
        tasks: state.entities.tasks,
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllQuestions: () => dispatch(fetchAllQuestions()),
        fetchAllData: () => dispatch(fetchAllData()),
        createTask: task =>  dispatch(createTask(task)),
        deleteTask: taskId =>  dispatch(deleteTask(taskId))
    }
}



export default withRouter(connect(mSTP, mDTP)(QuestionsForm))
