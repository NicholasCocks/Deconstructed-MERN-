import React, { useRef, useState } from "react";
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';

class CanvasComponent extends React.Component {

    render() {
        const classes = [];
        const points = this.props.answers.filter(answer => !!answer).map((answer, index) => {
           
            if (!classes.includes(answer.class)) {
                classes.push(answer.class);
                
                return (
                    <p key={index}>{answer.class}</p>
                )
            };
        }, this)


        return ( 
          <div className="points_container">    
           {points}
          </div>
        )
    }
}

export default CanvasComponent;