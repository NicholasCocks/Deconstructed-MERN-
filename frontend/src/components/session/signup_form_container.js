import { connect } from "react-redux";
import { signup, loginDemoUser } from "../../actions/session_actions";
import {  withRouter, Link } from "react-router-dom";
import SignupForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    formType: 'Signup',
    blurb: "Already have an account?",
    sessionLink: <Link to="/login" className="session_blurb_link">Login</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginDemoUser: (user) => dispatch(loginDemoUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
