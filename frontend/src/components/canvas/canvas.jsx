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

    // {companiesCollecting: ["5fc69a8dbb2f3c7c35280518"], _id: "5fc7c6923d5527f60a3212c0", class: "Email addresses", __v: 1}
        // top level: [Big Tech, null, 0, 0]
        // next : [question name, Big Tech, size + 1 for every answer, 0]
        // bottom : [dataclass name, question, size + 1 for every answer, size + 1 for every answer]

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
            debugger
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
        
        

    render() {
        const { answers } = this.props
        if (answers.length === 0) {
                return null
            } else {
            return (
    
                <div className="canvas_container" ref="myDiv">    
                    <Chart
                        width={'800px'}
                        height={'500px'}
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
                            minColor: '#fff',
                            midColor: '#',
                            maxColor: '#17215',
                            headerHeight: 15,
                            fontColor: 'black',
                            showScale: true,
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            )   
        }   
    }
}

export default CanvasComponent;