import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/logo.jpg'

class Splash extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {collection: 0, breaches: 0}
    } 

    componentDidMount() {
        this.interval = setInterval(() => this.setState({breaches: 68 + this.state.breaches , collection: Math.round((1.7 + this.state.collection) * 10) / 10 }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <div className="splash_container">
            <img src={logo} className="splash_picture" alt="logo"/>
            <header className="splash_header">
                <h1 className="splash_title">Your Data Deconstructed</h1>
                <Link to='/signup' className="splash_signup_button">Signup/Login</Link>
            </header>
            

            <div className="splash_content_container">
                <div>
                    <p>Amount of data being collected on each person on the internet since you loaded the page {this.state.collection} MB * </p>
                    <br></br>
                    <p>Data breaches since you started {this.state.breaches} * </p>
                    <br></br>
                    <p>* According to cloud software firm DOMO</p>
                </div>
            </div>
                    <Link to='/main' className="splash_app_button">Go To App</Link>
            
            <footer className="splash_footer">
            <p>by <a href="https://github.com/NicholasCocks/" target="_blank" rel="noreferrer">Nicholas Cocks</a>
            , <a href="https://github.com/usiddiki97" target="_blank" rel="noreferrer">Umarbin Siddiki</a>
            , <a href="https://github.com/trieutrue/" target="_blank" rel="noreferrer">Trieu Tran</a> and <a href="https://github.com/Muz-98" target="_blank" rel="noreferrer">Muzammil Chowhury</a>
            </p>
            <a href="https://github.com/NicholasCocks/Deconstructed-MERN-" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="splash_github"/></a>
            </footer>
        </div>
            )
    }
}

export default Splash;