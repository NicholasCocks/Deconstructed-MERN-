import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function AboutSection(props) {
    const [modal, openModal] = useState(false)

    // Deconstructed is a dynamic app to bring light to how much data is being collected from Big Tech companies we interact with daily.Nowadays with everything being online, it’s more important than ever to protect your data and privacy.We aim to let users engage with what data is being gathered on them and empowering them to take control of their data.This app was designed to be used anonymously, but with the added functionality of a curated task list for each logged in user.This task list provides detailed instructions on how to make their data more secure.

    // How to Use:
    // Under Accounts, we have a list of all the major platforms the average consumer would have.

    // Begin by clicking on the companies which you personally have accounts with!

    // Click on any company displayed on the chart to see specific data classes it may be collecting

    // Deciphering the color scale: The darker a data class is directly proportional to the number of companies collecting this specific data class.For example, “Email addresses” is green because practically every company collects email addresses.Conversely, the whiter a data class is, fewer and fewer companies collect this specific data class.

    // Right click on the chart to go back to the previous screen!

    // Create an account and log in to gain access to a task list, providing you links to each company's privacy settings along with company-specific instructions on how to protect your data.
    return (
    <div className={modal ? "about_section_container about_open" : "about_section_container"}>
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => openModal(!modal)} className={modal ? "task_arrow task_arrow_expanded" : "task_arrow task_arrow_collapse"} />
        <p className="about_title">About</p>
        <p className="about_desc"><i> Deconstructed is a dynamic app to bring light to how much data is being collected from Big Tech companies we interact with daily.Nowadays with everything being online, it’s more important than ever to protect your data and privacy.We aim to let users engage with what data is being gathered on them and empowering them to take control of their data.This app was designed to be used anonymously, but with the added functionality of a curated task list for each logged in user.This task list provides detailed instructions on how to make their data more secure.</i></p>

    </div>
    )
}

