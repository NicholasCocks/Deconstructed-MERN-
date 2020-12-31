import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.onToggle = this.onToggle.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    onToggle = () => this.setState({ open: !this.state.open })

    completeTask() {
        this.props.updateTask(this.props.task)
    }

    render() {
        let rotate = this.state.open ? 0 : -90;
        debugger
        return (
            <li className="task_item_container" >
                <div className="task_item_header" onClick={this.onToggle}>
                    <div className={`task_item_name`}>
                        <FontAwesomeIcon icon={faCaretDown} className={this.state.open ? "caret_down" : "caret_up"} />
                        <p>{this.props.question.question.charAt(0).toUpperCase() + this.props.question.question.slice(1)}</p>
                    </div>
                    <FontAwesomeIcon color={this.props.task.isComplete ? "green" : "lightgray"} icon={this.props.task.isComplete ? faCheckCircle : faCircle} onClick={() => this.completeTask()} />
                </div>
                <div className={this.state.open ? 'task_item task_item_open' : 'task_item'}>
                    <a href={this.props.url} target="_blank" >Link.</a>
                    <p>{this.props.question.instructions}</p>
                </div>
            </li>
        )
    }
}

export default TaskItem;