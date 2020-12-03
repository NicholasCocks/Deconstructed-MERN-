import { connect } from "react-redux";
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import { updateAnswers } from '../../actions/session_actions';
import QuestionsForm from './questions_form';

const mSTP = state => {
    const questionsAnswered = {};
    if (Object.keys(state.entities.questions).length !== 0 && Object.keys(state.session.user).length !== 0) {
        
        state.session.user.questionsAnswered.forEach(question => {
            questionsAnswered[question] = true
        })
    }

    return {
        user: state.session.user,
        questions: state.entities.questions,
        data: state.entities.dataclasses,
        questionsAnswered,
    }
}

const mDTP = dispatch => {
    return {
        fetchAllQuestions: () => dispatch(fetchAllQuestions()),
        fetchAllData: () => dispatch(fetchAllData()),
        updateAnswers: (user) => dispatch(updateAnswers(user)),
    }
}

export default connect(mSTP, mDTP)(QuestionsForm)