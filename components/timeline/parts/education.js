import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageWithFallback from '../../@others/ImageWithFallback'
import { _onEnter, _onLeave } from "../../../helpers"

import styles from '../index.module.scss'

const education = [
    {
        id: 4,
        date: 'June 17, 2021',
        issuer: 'Google',
        degree: 'Foundations of User Experience (UX) Design',
        logo: 'google.avif',
        url: 'https://coursera.org/share/1be583ab52360f520b67c7caf4858413',
        grade: '100%',
        skills: 'Skills Gained: User Experience (UX), UX Research, Wireframe, Prototype, User Experience Design (UXD)'
    },
    {
        id: 3,
        date: 'March 12, 2017',
        issuer: 'Link',
        degree: 'Computer technician & IT',
        logo: 'link.png',
        url: 'https://coursera.org/share/1be583ab52360f520b67c7caf4858413',
        grade: '10',
        skills: 'Will be added later'
    },
    {
        id: 2,
        date: '07/2014',
        issuer: 'FSHN, UT',
        degree: 'Bachelor in Applied Math',
        logo: 'ut.png',
        url: 'https://fshn.edu.al/',
    },
    {
        id: 1,
        date: '01/12/2013',
        issuer: 'AIDA',
        degree: 'Certificate in "The conception of a business plan"',
        logo: 'aida.png',
        url: 'https://www.aida.gov.al/',
    }
];

export default function Education() {
    return (
        education.map(function (element) {
            const renderLogo = () => {
                const name = element.issuer;
                const logo = element.logo;
                let logoUrl = '';
                let fallbackLogoUrl = '/images/empty.svg';

                if (logo) {
                    logoUrl = `/images/education/${logo}`;
                }
                else {
                    logoUrl = fallbackLogoUrl;
                }

                return (
                    // <img id={`test${element.id}`} src={logoUrl}  />
                    <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                        <ImageWithFallback
                            src={logoUrl}
                            fallbackSrc={fallbackLogoUrl}
                            alt={`${name} Logo`}
                            layout="fill"
                            objectFit='contain'
                        />
                    </div>
                )
            }

            const renderLink = () => {
                const name = element.issuer;
                const url = element.url;

                if (url) {
                    return <Link href={url}><a target="_blank" rel="noopener" title={name}>{name}</a></Link>;
                }
                else {
                    return name;
                }
            }

            const renderDate = () => {
                const date = element.date;
                if (date) {
                    return date;
                }
                else {
                    return 'Not specified';
                }
            }

            return (
                <Waypoint
                    key={`education_${element.id}_key`}
                    onEnter={_onEnter.bind(this, 'edu' + element.id, 'show')}
                    onLeave={_onLeave.bind(this, 'edu' + element.id, 'show')}
                >
                    <div id={'edu' + element.id} className={styles.inner}>
                        <div className={styles.logo}>{renderLogo()}</div>
                        <div className={styles.info}>
                            <div>
                                <span className={styles.date}>{renderDate()}</span>
                                <span className={styles.at}>@</span>
                                <span className={styles.name}>{renderLink()}</span>
                            </div>
                            <div>
                                <span className={styles.position}>{element.degree}</span>
                            </div>
                            {element.grade &&
                                <div className={styles.grade}><b>Grade:</b> {element.grade}</div>
                            }
                            {element.skills &&
                                <div className={styles.skills}><b>Skills gained:</b> {element.skills}</div>
                            }
                        </div>
                    </div>
                </Waypoint>
            )
        })
    )
}