import React from 'react';
import TaskItem from './task_item';

class Tasks extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        const { user } = this.props
        if (prevProps.user.id !== user.id || 
            ( user.id && prevProps.user.taskIds.length !== user.taskIds.length)) {
            const { fetchAllTasks, user } = this.props;
            fetchAllTasks(user.id);
        }
    }

    componentDidMount() {
         
        const { fetchAllTasks, user } = this.props
        fetchAllTasks(user.id)
    }


    render() {
         
        const { user, tasks, questions } = this.props
        if (!user.id) return null;
         
        const indexItems = tasks.filter((task, index) => (user.taskIds.includes(task._id)))
            .map((task, index) => {
                const { url, question } = questions[task.questionId]
                return (
                    <TaskItem index={index} question={question} url={url} />
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