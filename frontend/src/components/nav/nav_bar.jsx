import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import TeamMembers from '../team_members/team_members';
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false }
    
        this.handleClick = this.handleClick.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleSessionForms = this.handleSessionForms.bind(this);       
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick);
    }
    

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSessionForms(e) {
        const { location, history } = this.props
        e.stopPropagation();
       
        if (location.pathname === "/login" || location.pathname === "/signup") {
            return document.addEventListener("click", (event) => {
               
                history.push("/")
            })
        }
    }

    handleClick(e) {
        if (this.node.contains(e.target)) {
            this.setState({modalOpen: true})
            console.log('You clicked INSIDE the component.')
          } else {
            this.setState({modalOpen: false})
            console.log('You clicked OUTSIDE the component.')
         }
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <>   
                    <div className="nav_bar_buttons_container">
                        <button className="navbar_logout" onClick={this.logoutUser}>Logout</button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="nav_bar_buttons_container">
                        <Link to={'/signup'}><button onClick={this.handleSessionForms} className="nav_bar_login"><p>Signup</p></button></Link>
                        <Link to={'/login'}><button onClick={this.handleSessionForms} className="nav_bar_login"><p>Login</p></button></Link>
                    </div>
                </>
            );
        }
    }

    modal() {
        if (this.state.modalOpen) {
            return <TeamMembers />
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="nav_bar_container" >
                <Link to="/"><h1>DECONSTRUCTED</h1> </Link>
                <a href="https://github.com/NicholasCocks/Deconstructed-MERN-" target="_blank">
                    <FontAwesomeIcon className="question_form_icon" icon={faGithub} />
                </a> 
                <div ref={node => this.node = node}>
                    <FontAwesomeIcon icon={faUsers} />
                    {this.modal()}
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);