import React from 'react'
import { connect } from 'react-redux';
import { login, loginDemoUser } from '../../actions/session_actions';
import { Link } from "react-router-dom";
import SignupForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Login',
    blurb: "Don't have an account?",
    sessionLink: <Link to="/signup" className="session_blurb_link">Signup</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user)),
    loginDemoUser: (user) => dispatch(loginDemoUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);