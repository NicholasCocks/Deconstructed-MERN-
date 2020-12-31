import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import AboutContent from './about_content'

export default function AboutSection(props) {
    const [modal, openModal] = useState(false)

    return (
    <div className={modal ? "about_section_container about_open" : "about_section_container"}>
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => openModal(!modal)} className={modal ? "task_arrow task_arrow_expanded" : "task_arrow task_arrow_collapse"} />
        <AboutContent/>
    </div>
    )
}
