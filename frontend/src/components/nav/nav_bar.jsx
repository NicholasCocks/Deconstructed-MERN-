import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleSessionForms = this.handleSessionForms.bind(this);       
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
                        <Link to={'/signup'}><button onClick={this.handleSessionForms} className="navbar_signup">Signup</button></Link>
                        <Link to={'/login'}><button onClick={this.handleSessionForms} className="navbar_login">Login</button></Link>
                    </div>
                </>
            );
        }
    }

    render() {
       
        return (
            <div className="nav_bar_container" ref={this.wrapperRef}>
                <Link to="/"><h1>DECONSTRUCTED</h1> </Link>
                
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);