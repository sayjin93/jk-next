
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { CountUp } from 'use-count-up'

import styles from './index.module.scss'

const stats = [
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

export default function Stats() {
    const [countingStart, setCountingStart] = useState(false);

    const _onWaypont = (elementId, data) => {
        let element = document.getElementById(elementId);
        if (element != null) {
            if (data == true) {
                setCountingStart(data);
            }
            else {
                setCountingStart(data);
            }
        };
    };

    return (
        <div id="stats" className="section">
            <div className="container">
                <Waypoint
                    onEnter={_onWaypont.bind(this, 'stats', true)}
                    onLeave={_onWaypont.bind(this, 'stats', false)}
                >
                    <div className={styles.wrapper}>
                        {stats.map(function (element) {
                            return (
                                <div key={`stat_${element.id}_key`} id={`stat_${element.id}`} className={styles.col}>
                                    <div className={`${styles.col_inner}`}>
                                        <i className={`${styles.icon} fa-solid ${element.icon}`} />

                                        <h3 className={styles.number}>
                                            <CountUp
                                                isCounting={countingStart ? true : false}
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
