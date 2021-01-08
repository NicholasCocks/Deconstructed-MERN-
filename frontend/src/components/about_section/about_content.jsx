import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class AboutContent extends React.Component {
    constructor() {
        super()
        this.state = {
            isActive: false,
        }
    }

    render() {
        return (
            <>
                <h4 className="about_title">About</h4>
                    <div className="about_btns">
                        <button onClick={() => this.setState({ isActive: false })}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button onClick={() => this.setState({ isActive: true })}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                <div className="about_body">
                    <div className={this.state.isActive ? "about_hide" : "about_desc"}>
                        <p><i className="wordItalic">Deconstructed</i> is a dynamic app to bring light to how much data is being collected
                        from Big Tech companies we interact with daily. Nowadays with everything being online,
                        it’s more important than ever to protect your data and privacy. <br /><br /> <p>We aim to let users
                        engage with what data is being gathered on them and empowering them to take control of
                        their data. This app was designed to be used anonymously, but with the added functionality
                        of a curated task list for each logged in user. This task list provides detailed instructions
                        for each user to make their data more secure.</p></p>
                    </div >

                    <div className={this.state.isActive ? "about_howto" : "about_hide"}>
                        <h4 className="about_howto_title">How to Use: </h4>
                        <ul className="howto_list">
                            <li>Under Accounts, we have a list of all the major platforms the average consumer would have.</li>

                            <li>Begin by clicking on the companies which you personally have accounts with!</li>
                            <li>Click on any company displayed on the chart to see specific data classes it may be collecting</li>
                            <li>Deciphering the color scale:
                            <ul>
                                    <li>The darker a data class is directly proportional to the number of companies collecting this specific data class.For example, “Email addresses” is really dark because practically every company collects email addresses.</li>
                                    <li>Conversely, the lighter a data class is, fewer and fewer companies collect this specific data class.</li>
                                </ul>
                            </li>
                            <li>Right click on the chart to go back to the previous screen!</li>
                            <li>Create an account and log in to gain access to a task list, providing you links to each company's privacy settings along with company-specific instructions on how to protect your data.</li>
                        </ul>

                    </div>
                </div>

                
            </>
        )
    }
}

export default AboutContent;