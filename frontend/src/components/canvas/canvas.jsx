import React from "react";
import { Chart } from "react-google-charts";

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        // this.getAnswers = this.getAnswers.bind(this);
        this.getData = this.getData.bind(this);
    } 

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        this.getData();
    }

    

    getData() {
        const questions = this.props.questions;
        const dataclasses = this.props.dataclass;
        const questionsAnswered = this.props.answers;
        
        if (Object.keys(questions).length === 0 || Object.keys(dataclasses).length === 0) return null;
        
        const objData = {
            'columns': [
                'Name',
                'Parent',
                'Number of classes (size)',
                'size as related to color'
            ],
            'parent': ['Big Tech', null, 0, 0]
        }

        questionsAnswered.forEach(id => {
            let answerid = id;
            objData[questions[id].question] = [
                questions[id].question, 
                'Big Tech',
                1 + questions[id].dataclassCollection.length,
                1 + questions[id].dataclassCollection.length
            ]
            questions[id].dataclassCollection.forEach(id => {
                objData[[dataclasses[id].class, answerid]] = [
                    `${dataclasses[id].class} (${questions[answerid].question})`, 
                    questions[answerid].question, 
                    1 + dataclasses[id].companiesCollecting.length,
                    1 + dataclasses[id].companiesCollecting.length 
                ]
            })
        })
        
        return Object.values(objData)
    }
        
    showStaticTooltip() {
        return '<div style="background:#fd9; padding:10px; border-style:solid">' +
        'Read more about how this data is sourced <a href="https://haveibeenpwned.com/API/v3" target="_blank" style="color:blue; text-decoration: underline">here</a>.</div>';
    }
        

    render() {
        const { answers } = this.props
        if (answers.length === 0) {
                return null
            } else {
            return (
    
                <div className="canvas_container" ref="myDiv">    
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="TreeMap"
                        loader={<div>Loading Chart</div>}
                        
                        data={this.getData()}
                        options={{
                            highlightOnMouseOver: true,
                            maxDepth: 1,
                            maxPostDepth: 2,
                            minHighlightColor: '#8c6bb1',
                            midHighlightColor: '#9ebcda',
                            maxHighlightColor: '#edf8fb',
                            minColor: '#5e61ff',
                            midColor: '#f5deb3',
                            maxColor: '#ff5e5e',
                            headerHeight: 25,
                            fontColor: 'black',
                            fontSize: 14,
                            fontFamily: 'Arial',
                            showScale: true, 
                            generateTooltip: this.showStaticTooltip,
                        }}
                        
                    />
                    <p>Right click on the chart to go back to the previous screen.</p>
                </div>
            )   
        }   
    }
}

export default CanvasComponent;