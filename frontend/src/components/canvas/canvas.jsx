import React, { useRef, useState } from "react";
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
import BubbleChart from '@weknow/react-bubble-chart-d3';

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.myRef = React.createRef();

    }

    componentDidMount() {
        console.log(this.myRef)
        this.drawChart();
        // d3.select(this.myRef.current)
        //     .append("p")
        //     .text("Hello from D3");
    }

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];
        let w = 500;
        let h = 300;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
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
        
        const Rectangle = () => <rect width="100" height="200" x="50" y="20" />;
        function bubbleClic (label) {
            console.log("Custom bubble click func")
        }
        function legendClick (label) {
        console.log("Customer legend click func")
    }

        return <div id={"#" + this.props.id}></div>

        // return ( 
        //   <div className="points_container" ref={this.myRef}>
        //     {/* <Rectangle /> */}
        //    {points}
        // </div>

        // <BubbleChart
        //     graph={{
        //         zoom: 1.1,
        //         offsetX: -0.05,
        //         offsetY: -0.01,
        //     }}
        //     width={1000}
        //     height={800}
        //     padding={0} // optional value, number that set the padding between bubbles
        //     showLegend={true} // optional value, pass false to disable the legend.
        //     legendPercentage={20} // number that represent the % of with that legend going to use.
        //     legendFont={{
        //         family: 'Arial',
        //         size: 12,
        //         color: '#000',
        //         weight: 'bold',
        //     }}
        //     valueFont={{
        //         family: 'Arial',
        //         size: 12,
        //         color: '#fff',
        //         weight: 'bold',
        //     }}
        //     labelFont={{
        //         family: 'Arial',
        //         size: 16,
        //         color: '#fff',
        //         weight: 'bold',
        //     }}
        //     //Custom bubble/legend click functions such as searching using the label, redirecting to other page
        //     bubbleClickFunc={this.bubbleClick}
        //     legendClickFun={this.legendClick}
        //     data={[
        //         { label: 'CRM', value: 1 },
        //         { label: 'API', value: 1 },
        //         { label: 'Data', value: 1 },
        //         { label: 'Commerce', value: 1 },
        //         { label: 'AI', value: 3 },
        //         { label: 'Management', value: 5 },
        //         { label: 'Testing', value: 6 },
        //         { label: 'Mobile', value: 9 },
        //         { label: 'Conversion', value: 9 },
        //         { label: 'Misc', value: 21 },
        //         { label: 'Databases', value: 22 },
        //         { label: 'DevOps', value: 22 },
        //         { label: 'Javascript', value: 23 },
        //         { label: 'Languages / Frameworks', value: 25 },
        //         { label: 'Front End', value: 26 },
        //         { label: 'Content', value: 26 },
        //     ]}
        // />
        
    }
}

export default CanvasComponent;