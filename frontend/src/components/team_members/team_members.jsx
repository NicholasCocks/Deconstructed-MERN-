import React from 'react';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TeamMembers = () => (
    <div className='team_members_container'>
        <h3 className="team_members_title">Meet the Team!</h3>
        <ul>
            <li>
                <p>FLEX Leader: Nicholas Cocks</p>
                <div>
                    <a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://angel.co/u/nicholas-cocks-2" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                    <a href="https://github.com/NicholasCocks" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </li>
            <br />
            <li>
                <p>FLEX Engineer: Muzammil Chowdhury</p>
                <div>
                    <a href="https://www.linkedin.com/in/muzammil-c/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://angel.co/u/muzammil-chowdhury" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                    <a href="https://github.com/Muz-98" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </li>
            <br />
            <li>
                <p>Backend Engineer: Trieu (JT) Tran</p>
                <div>
                    <a href="https://www.linkedin.com/in/trieu-tran-52339a167/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://angel.co/u/trieutran" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                    <a href="https://github.com/trieutrue" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </li>
            <br />
            <li>
                <p>Frontend Engineer: Umarbin Siddiki</p>
                <div>
                    <a href="https://www.linkedin.com/in/umarbin-siddiki-032a22201/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://angel.co/u/umarbin-siddiki" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                    <a href="https://github.com/usiddiki97" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </li>
        </ul>
    </div>
)

export default TeamMembers;