import React from 'react';

class QuestionsForm extends React.Component {

    componentDidMount() {
        this.props.fetchAllData()
        this.props.fetchAllQuestions()
    }

    render() {
        
        const questionsLi = Object.values(this.props.fetchAllQuestions()).map((question, i) =>{
            return (
                <li key={i}>{question}</li>
            )
        })
        
        return (
            <div>
                <ul>
                    {questionsLi}
                </ul>
            </div>
        )
    }
}

export default QuestionsForm;