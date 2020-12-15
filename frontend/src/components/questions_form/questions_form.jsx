import React from 'react';
import CanvasContainer from '../canvas/canvas_container';
import TasksContainer from '../tasks/tasks_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brand from '@fortawesome/free-brands-svg-icons';

class QuestionsForm extends React.Component {
    constructor(props) {
        super(props)
       
        this.state = this.props.questionsAnswered;
        this.handleClick = this.handleClick.bind(this);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchAllData();
        this.props.fetchAllQuestions();
    }

    componentDidUpdate(prevProps, prevState) {
        const {user, questionsAnswered } = this.props;
        if (Object.keys(questionsAnswered).length !== 0 && Object.keys(prevState).length === 0) {
            this.setState(questionsAnswered)
            return
        } else if (Object.keys(user).length !== Object.keys(prevProps.user).length) {
            if (Object.keys(user).length === 0) {
                Object.keys(this.state).forEach((key) => {
                    this.state[key] = false
                })
            } else {
                Object.keys(questionsAnswered).forEach((key) => {
                    this.state[key] = true
                })
            }
            this.setState({})
        }
        //if user logs out
        
    }

    handleClick(e) {
        const { value } = e.currentTarget
        const { user, tasks, createTask, deleteTask } = this.props
        if (this.state[value]) {
            this.setState({ [value]: false });
            const taskIds = Object.keys(tasks)
            taskIds.forEach(taskId => tasks[taskId].questionId === value ? deleteTask(taskId) : null ) 
        } else {
            this.setState({ [value]: true });
            createTask({ userId: user._id, questionId: value })
        }
    }
    

    render() {
        const checkboxes = Object.values(this.props.questions).map((question, index) => {
            const title = question.question.charAt(0).toUpperCase() + question.question.slice(1)
        return (
            <div key={index} className="questions_form_item">
                <button 
                value={question._id} 
                onClick={this.handleClick} 
                className={this.state[question._id] ? "questions_form_button" : ''} >
                    <FontAwesomeIcon className="question_form_icon" icon={Brand[`fa${title}`]} />
                    {` ${title}`}
                </button>
            </div>
        )})
        // this.props.user.questionsAnswered.indexOf(question._id) !== -1
        return (
            <>
                <form id="questions_form">
                    <p className="questions_form-title"><b><u>Accounts</u></b></p>
                    <ul className="question_form-ul">
                        {checkboxes}
                    </ul>
                </form>
                <CanvasContainer answers={Object.keys(this.state).filter(key => this.state[key])} />
                <TasksContainer />
            </>
         )
    }
}

export default QuestionsForm;
