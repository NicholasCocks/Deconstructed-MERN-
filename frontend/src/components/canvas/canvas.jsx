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
    

    componentDidUpdate() {
        let container = d3.select(this.refs.myDiv)
        container.selectAll('*').remove()

        const classes = [];
        this.props.answers.filter(answer => !!answer).map((answer, index) => {
           
            if (!classes.includes(answer.class)) {
                classes.push(answer.class);
                
                // d3.select(this.refs.myDiv)
                //     .append("p")
                //     .text(answer.class)
                
                
            };
        }, this)


        // classes.forEach(el => {
        //     d3.select(this.refs.myDiv)
        //         .append("p")
        //         .text(el)
        // })

        let width = 800;
        let height = 800;

        const bubbleSvg = d3.select(this.refs.myDiv)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(0, 0)")

        const simulation = d3.forceSimulation() 
        
        
        const circles = bubbleSvg.selectAll(".datesCircles")
            .data(classes)
            .enter().append("circle")
            .attr("class", "datesCircles")
            .attr("r", 10)
            .attr("fill", "lightblue")
        
        


    }

    render() {
        
        return (
            <div className="canvas_container" ref="myDiv">    
                
            </div>
        )
        
    }
}

export default CanvasComponent;