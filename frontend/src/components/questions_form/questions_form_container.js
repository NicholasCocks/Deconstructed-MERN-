import { connect } from "react-redux";
import { fetchAllData } from '../../actions/question_actions';
import QuestionsForm from './questions_form'

// const mSTP = state => {
//     return {
        
//     }
// }

const mDTP = dispatch => {
    return {
        fetchAllData: () => dispatch(fetchAllData())
    }
}

export default connect(null, mDTP)(QuestionsForm)