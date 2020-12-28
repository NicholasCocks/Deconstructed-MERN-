import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretDown, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component{ 
    constructor(props) {
        super(props)
        this.state = {open: false}
        this.toggle = this.toggle.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    toggle() {
        this.state.open ? this.setState({open: false}) : this.setState({open: true})
    }

    completeTask() {
        //    
        this.props.updateTask(this.props.task)
    }

    render() {
        let openClass = this.state.open ? 'task_item_open' : 'task_item_closed';
        let rotate = this.state.open ? 0 : -90;
        //    
        return (
            <li className="task_item_container" >
                <div className="task_item_header"  >
                    <div onClick={() => this.toggle()} className={`task_item_name`}>
                        <FontAwesomeIcon icon={faCaretDown}  transform={{ rotate: rotate }}/>
                        <p>{this.props.question.charAt(0).toUpperCase() + this.props.question.slice(1)}</p>
                    </div>
                    <FontAwesomeIcon icon={this.props.task.isComplete ? faCheckCircle : faCircle} onClick={() => this.completeTask()}/>
                </div>
                <div className={openClass}>
                    <a href={this.props.url} target="_blank" >More Info</a>
                </div>
            </li>
        )
    }
}

export default TaskItem;