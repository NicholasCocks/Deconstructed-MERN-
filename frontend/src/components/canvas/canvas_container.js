import { connect } from "react-redux";
import Canvas from './canvas';

const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.entities.questions,
        data: state.entities.data,
        answers: ownProps.answers
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)