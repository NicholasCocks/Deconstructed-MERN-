import React from 'react';
import TaskItemContainer from './task_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import AboutSection from '../about_section/about_section';

class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    componentDidMount = () => { 
        const { fetchAllTasks, user } = this.props
        if (user._id) fetchAllTasks(user._id)
    }

    onToggle = () => this.setState({open: !this.state.open})

    render() {
        const { user, tasks, questions } = this.props
        if ( !user._id || !Object.keys(questions).length ) return null;
        const indexItems = tasks.map((task, index) => {
                const { url, question } = questions[task.questionId]
                return (
                    <TaskItemContainer key={index} question={question} task={task} url={url} />
                )
            })
        console.log(this.state.open)

        return (
            <div className={this.state.open ? "tasks_container task_is_expanded" : "tasks_container "}>
                <p className="task_list_title">TASKS</p>
                <FontAwesomeIcon icon={faAngleLeft} onClick={this.onToggle} className={this.state.open ? "task_arrow task_arrow_expanded" : "task_arrow task_arrow_collapse"} />
                <ul className="task_list">
                    {indexItems}
                </ul>
            </div>
        )
    }
}

export default Tasks;