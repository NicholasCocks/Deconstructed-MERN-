import React from 'react';

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
        // debugger
        const { fetchAllTasks, user } = this.props
        fetchAllTasks(user.id)
    }


    render() {
        // debugger
        const { user, tasks, questions } = this.props
        if (!user.id) return null;
        // debugger
        const indexItems = tasks.filter((task, index) => (user.taskIds.includes(task._id)))
            .map((task, index) => {
                const { url, question } = questions[task.questionId]
                return (
                    <li className="task_list_items" key={index}>
                        <a href={url} target="_blank" >{question}</a>
                    </li>
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