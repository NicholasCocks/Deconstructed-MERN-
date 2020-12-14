import { connect } from 'react-redux';
import { login, loginDemoUser } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    loginDemoUser: (user) => dispatch(loginDemoUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);