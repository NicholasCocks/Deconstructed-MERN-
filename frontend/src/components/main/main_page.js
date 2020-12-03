import React from 'react';
import QuestionForm from '../questions_form/questions_form_container';
// import Canvas from '../canvas/canvas_container';

class MainPage extends React.Component {
  render() {
    return (
      <div className="canvas_container">
        <QuestionForm />
      </div>
    );
  }
}
// canvas 
//task container


export default MainPage;