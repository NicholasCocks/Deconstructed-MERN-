import React from 'react';
import CanvasContainer from '../canvas/canvas_container';
class QuestionsForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchAllData()
        this.props.fetchAllQuestions() 
        //this.props.updateAnswers()
    }

    handleClick(e) {
        
        if (!this.state[e.currentTarget.value]) {
            this.setState({[e.currentTarget.value]: true})  
        } else {
            this.setState({[e.currentTarget.value]: false})
        }

        // EX: {['questionIds']: boolean, ['questionIds']: boolean}

        // this.props.updateAnswers({id: this.props.user.id, 
        // data: Array.from(this.state)})
        // dispatch(updateAnswer)
        // keys = Object.keys(this.state).filter(key => {
        //    return this.state[key] 
        // })
    }

    render() {
        const checkboxes = Object.values(this.props.questions).map((question, index) => {
        
        return (
            <div key={index}>
                <p>{question.question}</p>
                <input type="checkbox" ref={this.inputRef} value={question._id} onClick={this.handleClick} /> 
            </div>
        )})
        
        return (
            <div>
                <form id="questions_form">
                    <ul>
                        {checkboxes}
                    </ul>
                </form>
            {console.log(this.state)}
            <CanvasContainer answers={Object.keys(this.state).filter(key => {return this.state[key] })} />
            </div>
         )
    }
}

export default QuestionsForm;
