import React from 'react';
import QuestionForm from '../questions_form/questions_form_container';
import NavBarContainer from '../nav/nav_bar_container';


class MainPage extends React.Component {
  render() {
    return (
      <>
      <NavBarContainer />
      <div className="app_container">
        <QuestionForm />
      </div>
      </>
    );
  }
}
// canvas 
//task container


export default MainPage;