import React from 'react';
import QuestionForm from '../questions_form/questions_form_container';
// import Canvas from '../canvas/canvas_container';

class MainPage extends React.Component {
  render() {
    return (
      <div className="page_container">
        <h1>DECONSTRUCTED</h1>
        <QuestionForm />
      </div>
    );
  }
}
// canvas 
//task container


export default MainPage;