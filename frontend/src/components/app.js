import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import QuestionFormContainer from './questions_form/questions_form_container';
import SignupFormContainer from './session/signup_form_container';

import MainPage from './main/main_page';

const App = () => (
        <div>
                <NavBarContainer />
                <Switch>
                        <Route path="/" component={QuestionFormContainer} />
                        <Route exact path="/" component={MainPage} />
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </Switch>
        </div>
);

export default App;