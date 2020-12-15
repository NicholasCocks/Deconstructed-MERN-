import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import { createTask, deleteTask } from '../../actions/task_actions';
import QuestionsForm from './questions_form';

const mSTP = state => {
    const questionsAnswered = {};
    if (!!Object.keys(state.entities.questions).length && !!Object.keys(state.session.user).length) {
        
        state.session.user.questionsAnswered.forEach(question => {
            questionsAnswered[question] = true
        })
    }
    
    return {
        user: state.session.user,
        questions: state.entities.questions,
        data: state.entities.dataclasses,
        tasks: state.entities.tasks,
        questionsAnswered,
    }
}

const mDTP = dispatch => {
    return {
        fetchAllQuestions: () => dispatch(fetchAllQuestions()),
        fetchAllData: () => dispatch(fetchAllData()),
        createTask: task =>  dispatch(createTask(task)),
        deleteTask: taskId => (deleteTask(taskId))}
    }
            ;

export default withRouter(connect(mSTP, mDTP)(QuestionsForm))