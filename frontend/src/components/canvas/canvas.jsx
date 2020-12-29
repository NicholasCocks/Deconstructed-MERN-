import React, { useRef, useState } from "react";
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import { IgrTreemapModule } from "igniteui-react-charts";
import { IgrTreemapComponent } from 'igniteui-react-charts';

IgrTreeMapModule.register();

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
        
        // d3.queue()
        //     .await(ready)
       

        function ready (classes) {
        }
        const circles = bubbleSvg.selectAll(".datesCircles")
            .data(classes)
            .enter().append("circle")
            .attr("class", "datesCircles")
            .attr("r", 10)
            .attr("fill", "lightblue")

        // simulation.nodes(classes)
            // .on('tick', ticked)
        console.log('hello1')
        console.log(classes)
        function ticked() {
            circles
                .attr("cx", function(d) {
                    return d.x
                })
                .attr("cy", function(d) {
                    return d.y
                })
        }


        
        


    }

    render() {
        
        return (
            <div className="canvas_container" ref="myDiv">    
                <div style={{ width: "100%", height: "calc(100% - 75px)" }}>
                    <IgrTreemap
                        ref={this.onTreeMapRef}
                        height="100%"
                        width="100%"
                        parentIdMemberPath="parent"
                        idMemberPath="id"
                        labelMemberPath="name"
                        valueMemberPath="pop"
                        transitionDuration="500"
                        rootTitle="Countries" >
                        {/* <IgrTreemapNodeStyleMapping
                    name="fill1"
                    mappingMode="value"
                    minimumValue={3000}
                    maximumValue={3000000}
                    fill="red" /> */}
                    </IgrTreemap>
                </div>
            </div>
        )
        
    }
}

export default CanvasComponent;