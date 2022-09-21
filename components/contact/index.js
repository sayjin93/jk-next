
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { CountUp } from 'use-count-up';

import styles from './index.module.scss'

const contact = [
    {
        id: 1,
        icon: 'fa-tasks',
        number: 284,
        text: "Projects Completed"
    },
    {
        id: 2,
        icon: 'fa-code',
        number: 574,
        text: "Lines of Code"
    },
    {
        id: 3,
        icon: 'fa-smile-wink',
        number: 48,
        text: "Happy Clients"
    },
    {
        id: 4,
        icon: 'fa-award',
        number: 18,
        text: "Awards Earned"
    },
]

export default function Contact() {
    const [countingStart, setCountingStart] = useState(false);

    const _onWaypont = (elementId, data) => {
        let element = document.getElementById(elementId);
        if (element != null) {
            setCountingStart(data);

        };
    };

    return (
        <div id="contact" className="section">
            <div className="container">
                <h1 className="title">Contact Me</h1>

                <Waypoint
                    onEnter={_onWaypont.bind(this, 'contact', true)}
                    onLeave={_onWaypont.bind(this, 'contact', false)}
                >
                    <div className={styles.wrapper}>
                        {contact.map(function (element) {
                            return (
                                <div key={`stat_${element.id}_key`} id={`stat_${element.id}`} className={styles.col}>
                                    <div className={`${styles.col_inner}`}>
                                        <i className={`${styles.icon} fa-solid ${element.icon}`} />

                                        <h3 className={styles.number}>
                                            <CountUp
                                                isCounting={countingStart}
                                                end={element.number} duration={3.2} />
                                        </h3>

                                        <h2 className={styles.text}>{element.text}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Waypoint>
            </div>
        </div >
    )
}
