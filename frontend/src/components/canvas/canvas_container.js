import { connect } from "react-redux";
import Canvas from './canvas';

const mapStateToProps = (state, ownProps) => {
    debugger
//    cross reference answers with 
    return {
        questions: state.entities.questions,
        dataclass: state.entities.dataclass,
        answers: ownProps.answers.map((questionId) => {
            return state.entities.questions[questionId]
        }).map((question) => {
            return question.dataclassCollection.map((dataclassId) => {
                return state.entities.dataclass[dataclassId]
            })
        }).flat()
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)