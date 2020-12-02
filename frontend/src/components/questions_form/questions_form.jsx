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
    }

    handleClick(e) {
        if (!this.state[e.currentTarget.value]) {
            this.setState({[e.currentTarget.value]: true})  
        } else {
            this.setState({[e.currentTarget.value]: false})
        }
        
        // console.log(this.state)
    }

    render() {
        const checkboxes = Object.values(this.props.questions).map((question, index) => {
        return (
            <div key={index}>
                <p>{question.question}</p>
                <input type="checkbox" ref={this.inputRef} value={question.question} onClick={this.handleClick} /> 
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
            <CanvasContainer answers={this.state} />
            </div>
         )
    }
}

export default QuestionsForm;
