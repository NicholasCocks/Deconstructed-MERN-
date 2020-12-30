import { connect } from 'react-redux'
import { fetchAllData, fetchAllQuestions } from '../../actions/question_actions';
import { updateDB } from '../../util/seed_util'
import Seed from './seed';

const mSTP = state => ({
  questions: state.entities.questions,
  dataclasses: state.entities.dataclass
})

const mDTP = dispatch => ({
  fetchAllQuestions: () => dispatch(fetchAllQuestions()),
  fetchAllData: () => dispatch(fetchAllData()),
  updateDB: data => updateDB(data)
})

export default connect(mSTP, mDTP)(Seed)