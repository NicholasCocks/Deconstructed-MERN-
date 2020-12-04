import React from 'react';
import CanvasContainer from '../canvas/canvas_container';
import TasksContainer from '../tasks/tasks_container';

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
        //if user logs in
        debugger
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
            console.log('component shouldve reset the state')
            this.setState({})
        }
        //if user logs out
        
    }

    handleClick(e) {
        const stateClone = Object.assign({}, this.state)
        

        if (!this.state[e.currentTarget.value]) {
            stateClone[e.currentTarget.value] = true;
            this.setState({[e.currentTarget.value]: true});
        } else {
            stateClone[e.currentTarget.value] = false;
            this.setState({[e.currentTarget.value]: false});
        }

        // EX: {['questionIds']: boolean, ['questionIds']: boolean}
        const keys = Object.keys(stateClone).filter(key => {
            return stateClone[key];
        })
        // debugger
        if (Object.keys(this.props.user).length !== 0 ) {
            // debugger
            this.props.updateAnswers({id: this.props.user.id, data: keys})
        }
    }
    

    render() {
        const checkboxes = Object.values(this.props.questions).map((question, index) => {
        // debugger
        return (
            <div key={index} className="questions_form_item">
                <button 
                value={question._id} 
                onClick={this.handleClick} 
                className={this.state[question._id] ? "questions_form_button" : ''} >
                    {question.question.charAt(0).toUpperCase() + question.question.slice(1)}
                </button>
            </div>
        )})
        // this.props.user.questionsAnswered.indexOf(question._id) !== -1
        return (
            <>
                <form id="questions_form">
                    <p className="questions_form-title"><b><u>Accounts</u></b></p>
                    <ul>
                        {checkboxes}
                    </ul>
                </form>
                <CanvasContainer answers={Object.keys(this.state).filter(key => {return this.state[key] })} />
                <TasksContainer />
            </>
         )
    }
}

export default QuestionsForm;
