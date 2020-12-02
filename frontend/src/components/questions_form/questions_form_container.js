import { connect } from "react-redux";
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import QuestionsForm from './questions_form'

const mSTP = state => {
    return {
        questions: state.entities.questions,
        data: state.entities.dataclasses
    }
}

const mDTP = dispatch => {
    return {
        fetchAllQuestions: () => dispatch(fetchAllQuestions()),
        fetchAllData: () => dispatch(fetchAllData())
    }
}

export default connect(mSTP, mDTP)(QuestionsForm)