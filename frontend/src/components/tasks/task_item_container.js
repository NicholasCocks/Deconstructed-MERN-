import { connect } from "react-redux";
import TaskItem from './task_item';
import { updateTask } from '../../actions/task_actions';

const mDTP = (dispatch) => {
    return {
        updateTask: (task) => dispatch(updateTask(task)),
    }
} 

export default connect(null, mDTP)(TaskItem)