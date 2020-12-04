import { connect } from "react-redux";
import Canvas from './canvas';

const mapStateToProps = (state, ownProps) => {
    let answers = []
    if (!!Object.keys(state.entities.dataclass).length) {
        answers = ownProps.answers.map((questionId) => {
            return state.entities.questions[questionId]
        }).map((question) => {
            // debugger
            return question.dataclassCollection.map((dataclassId) => {
                return state.entities.dataclass[dataclassId]
            })
        }).flat()
    }
    // debugger;
    return {
        questions: state.entities.questions,
        dataclass: state.entities.dataclass,
        answers: answers
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)