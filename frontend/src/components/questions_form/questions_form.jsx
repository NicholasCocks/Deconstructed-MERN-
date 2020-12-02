import React from 'react';

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
        const checkboxes = Object.values(this.props.questions).map((question) => {
            debugger
            return <input type="checkbox" ref={this.inputRef} value={question} onClick={this.handleClick} />
        })
        
        return (
            <div>
                <form id="questions_form">
                    <ul>
                        {checkboxes}

                    </ul>
                </form>
            { console.log(this.state)}
            </div>
         )
    }
}

export default QuestionsForm;
