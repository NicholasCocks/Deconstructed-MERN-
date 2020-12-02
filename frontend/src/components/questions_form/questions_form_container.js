import { connect } from "react-redux";
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import { updateAnswers } from '../../actions/session_actions';
import QuestionsForm from './questions_form'

const mSTP = state => {
    return {
        user: state.session.user,
        questions: state.entities.questions,
        data: state.entities.dataclasses
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