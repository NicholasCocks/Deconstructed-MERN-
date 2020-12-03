import { connect } from "react-redux";
import { fetchAllTasks, fetchTask } from '../../actions/task_actions';
import Tasks from './tasks'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        tasks: state.entities.tasks,
        task: state.entities.tasks[ownProps.match.params.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchTask: () => dispatch(fetchTask()),
        fetchAllTasks: () => dispatch(fetchAllTasks())
    }
}

export default withRouter(connect(mSTP, mDTP)(Tasks))