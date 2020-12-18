import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleSessionForms = this.handleSessionForms.bind(this);       
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.bodyClick);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.bodyClick);
      }
    
    // bodyClick(e) {
    //     debugger
    //     if (this.tipContentRef.contains(e.target)) {
    //       return;
    //     }
    
    //     this.setState({ modalOpen: false });
    //   }

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
        if (this.tipContentRef.contains(e.target)) {
            return;
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
                        <button> <a href="https://github.com/NicholasCocks/Deconstructed-MERN-" target="_blank">
                            <FontAwesomeIcon className="question_form_icon" icon={faGithub} />
                        </a> </button>
                        <div ref={"tipContentRef"}>
                            <FontAwesomeIcon icon={faUsers} onClick={() => this.handleClick()} />
                        </div>
                        <Link to={'/signup'}><button onClick={this.handleSessionForms} className="nav_bar_login"><p>Signup</p></button></Link>
                        <Link to={'/login'}><button onClick={this.handleSessionForms} className="nav_bar_login"><p>Login</p></button></Link>
                    </div>
                </>
            );
        }
    }

    modal() {
        if (this.state.modalOpen) {
            return (<div>model</div>)
        } else {
            return null;
        }
    }

    render() {
        
       
        return (
            <div className="nav_bar_container" ref={this.wrapperRef}>
                <Link to="/"><h1>DECONSTRUCTED</h1> </Link>
                {this.modal()}
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);