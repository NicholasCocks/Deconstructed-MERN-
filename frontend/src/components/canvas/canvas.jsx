import React, { useRef, useState } from "react";
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
import BubbleChart from '@weknow/react-bubble-chart-d3';

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }

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
            <div className="canvas_container">    
                
                    {points}
                
            </div>
        )
        
    }
}

export default CanvasComponent;