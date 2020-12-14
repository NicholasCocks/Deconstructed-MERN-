import React from 'react'
import { useState } from 'react'

const TaskItem = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <li className="task_list_items" key={props.index}>
            <a href={props.url} target="_blank" >{props.question}</a>
            <p>More Info</p>
        </li>
    )
}

export default TaskItem;