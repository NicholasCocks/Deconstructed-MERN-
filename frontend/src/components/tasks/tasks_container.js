import { connect } from "react-redux";
import Tasks from './tasks'
import { withRouter } from 'react-router-dom';
import { fetchAllTasks } from '../../actions/task_actions';

const mSTP = (state) => {
    return {
        tasks: Object.values(state.entities.tasks),
        user: state.session.user,
        questions: state.entities.questions
        // task: state.entities.tasks
    }
}

const mDTP = dispatch => {
    return {
        // fetchTask: () => dispatch(fetchTask()),
        fetchAllTasks: userId => dispatch(fetchAllTasks(userId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Tasks))