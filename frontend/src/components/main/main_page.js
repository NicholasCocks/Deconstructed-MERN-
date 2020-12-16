import React from 'react';
import QuestionForm from '../questions_form/questions_form_container';
import Tasks from '../tasks/tasks_container';


class MainPage extends React.Component {
  render() {
    return (
      <div className="app_container">
        <QuestionForm />
      </div>
    );
  }
}
// canvas 
//task container


export default MainPage;