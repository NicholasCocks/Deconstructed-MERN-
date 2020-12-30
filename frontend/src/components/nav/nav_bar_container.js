import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from 'react-router-dom';

import NavBar from "./nav_bar";

const mapStateToProps = (state, ownProps) => {
  
  
  return {
    loggedIn: state.session.isAuthenticated,
    path: ownProps.match.path,
   
}};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
