import React from "react";
import {  withRouter, Link } from "react-router-dom";
import logocropped from '../../assets/images/logo_cropped.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: "",
      password: "",
      password2: "",
      
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    debugger
    
    this.props.processForm(user)
  }

  togglePassword() {
    if (this.state.passwordShown === true) { this.setState({passwordShown: false}) 
    } else {
        this.setState({passwordShown: true})
    }
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.loginDemoUser({ email: 'usiddiki10282@gmail.com', password: 'hunter12', errors: {} })
  }

  renderErrors() {
    return (
      <ul className="session_errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {

    const picon = () => { if (this.state.passwordShown){ return faEye } else {return faEyeSlash}}
    const secondpass = () => { if (this.props.formType === "Signup") { 
    return <input
      type={this.state.passwordShown ? "text" : "password"}
      value={this.state.password2}
      onChange={this.update("password2")}
      placeholder="Confirm Password"
    />} else { return null}}

    return (
      <div className="signup_form_container">
        <Link to="/" ><h1 className="signup_title">Deconstructed</h1></Link>
        <img src={logocropped} className="signup_picture"/>
        <form onSubmit={this.handleSubmit} onClick={(e) => e.stopPropagation() } className="signup_form">
          {this.renderErrors()}
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email" 
            />
            <br />
            <FontAwesomeIcon icon={picon()} className="session_password_toggle_icon" onClick={() => {this.togglePassword()}}/>
            <input
              type={this.state.passwordShown ? "text" : "password"}
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            {secondpass()}
            <input type="submit" value={this.props.formType} />
            <button 
              className="session_demo_user" 
              onClick={this.handleDemoUser} 
              >Demo User</button>
            <p>{this.props.blurb} {this.props.sessionLink}.</p>
        </form>
        
      </div>
    );
  }
}

export default withRouter(SignupForm);
