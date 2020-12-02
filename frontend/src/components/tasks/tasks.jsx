import React from 'react';

class Tasks extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTask()
        this.props.fetchAllTasks()
    }


    render() {
        const taskLi = Object.values(this.props.tasks).map((task, i) => {
            return (
                <li key={i}>{task}</li>
            )
        })

        return (
            <div>
                {taskLi}
            </div>
        )
    }
}

export default Tasks;