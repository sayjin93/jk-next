import { Waypoint } from 'react-waypoint';
import { _onEnter, _onLeave } from '../../helpers';

import styles from './index.module.scss'

const skills = [
    {
        id: 1,
        name: 'HTML',
        experience: 10,
        percentage: 95,
        color: "#000"
    },
    {
        id: 2,
        name: 'CSS',
        experience: 10,
        percentage: 90,
        color: "#000"
    },
    {
        id: 3,
        name: 'Javascript',
        experience: 4,
        percentage: 75,
        color: "#000"
    },
    {
        id: 4,
        name: 'jQuery',
        experience: 4,
        percentage: 75,
        color: "#000"
    },
    {
        id: 5,
        name: 'PHP',
        experience: 3,
        percentage: 65,
        color: "#e3872d"
    },
    {
        id: 6,
        name: 'MySQL',
        experience: 3,
        percentage: 60,
        color: "#e3872d"
    },
    {
        id: 7,
        name: 'Wordpress',
        experience: 5,
        percentage: 70,
        color: "#041230"
    },
    {
        id: 8,
        name: 'Joomla',
        experience: 2,
        percentage: 30,
        color: "#041230"
    },
    {
        id: 9,
        name: 'Drupal',
        experience: 4,
        percentage: 70,
        color: "#041230"
    },
    {
        id: 10,
        name: 'Photoshop',
        experience: 7,
        percentage: 80,
        color: "#b71e4d"
    },
    {
        id: 11,
        name: 'Illustrator',
        experience: 4,
        percentage: 70,
        color: "#b71e4d"
    },
    {
        id: 12,
        name: 'InDesign',
        experience: 1,
        percentage: 40,
        color: "#b71e4d"
    }
]

export default function Skills() {
    return (
        <div id="skills" className="section hasBG">
            <div className="container">
                <h1 className="title">Skills</h1>

                <div className={styles.wrapper}>

                    {skills.map(function (element) {
                        return (
                            <Waypoint
                                key={`skill_${element.id}_key`}
                                onEnter={_onEnter.bind(this, 'skill' + element.id, styles.show)}
                            // onLeave={_onLeave.bind(this, 'skill' + element.id, styles.show)}
                            >
                                <div id={'skill' + element.id} className={styles.col}>
                                    <div className={styles.label}>
                                        <span>{element.name}</span>
                                        <span className={styles.number}>{element.percentage}%</span>
                                    </div>
                                    <div className={styles.experience}>{element.experience} {element.experience > 1 ? 'years' : 'year'} of experience</div>
                                    <div className={styles.progress}>
                                        <div className={styles.animation}>
                                            <div className={styles.bar} style={{ width: element.percentage + '%', backgroundColor: element.color }}></div>
                                        </div>
                                    </div>
                                </div>
                            </Waypoint>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}