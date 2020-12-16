import React from 'react';
import TaskItemContainer from './task_item_container';

class Tasks extends React.Component {
    constructor(props) {
        super(props)
    }

<<<<<<< HEAD
    componentDidUpdate(prevProps) {
        const { user } = this.props
        // debugger
        if (!prevProps.user._id || !user._id) return;
        if (prevProps.user._id !== user._id || 
            ( user._id && prevProps.user.taskIds.length !== user.taskIds.length)) {
            const { fetchAllTasks, user } = this.props;
            fetchAllTasks(user._id);
        }
    }
=======
    // componentDidUpdate(prevProps) {
    //     const { user } = this.props
    //     debugger
    //     if (!prevProps.user._id || !user._id) return;
    //     if (prevProps.user._id !== user._id || 
    //         ( user._id && prevProps.user.taskIds.length !== user.taskIds.length)) {
    //         const { fetchAllTasks, user } = this.props;
    //         fetchAllTasks(user._id);
    //     }
    // }
>>>>>>> master

    componentDidMount() { 
        const { fetchAllTasks, user } = this.props
        if (user._id) fetchAllTasks(user._id)
    }


    render() {
        const { user, tasks, questions } = this.props
        if ( !user._id || !Object.keys(questions).length ) return null;
        // debugger
        const indexItems = tasks.map((task, index) => {
            // debugger
                const { url, question } = questions[task.questionId]
                return (
                    <TaskItemContainer key={index} question={question} task={task} url={url} />
                )

            })

        return (
            <div className="tasks_container">
                <p className="tasklist-title"><b><u>TASKS</u></b></p>
                <ul className="task_list">
                    {indexItems}
                </ul>
            </div>
        )
    }
}

export default Tasks;