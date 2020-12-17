import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
        <div>
            <Link to="/" >Back to main page</Link>
            <p>splash component</p>
        </div>
            )
    }
}

export default Splash;