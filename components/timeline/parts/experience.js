import Link from 'next/link'
import { Waypoint } from 'react-waypoint';
import { _onEnter, _onLeave } from "../../../helpers"

import styles from '../index.module.scss'

const experiences = [
    {
        id: 4,
        dateFrom: '2022/06',
        dateTo: null,
        companyName: 'RevZone Solutions',
        companyLogo: 'revzone.svg',
        companyUrl: 'https://www.revzonesolutions.com/',
        position: 'Frontend Developer',
        description: 'Creating Web Applications with ReactJS.'
    },
    {
        id: 3,
        dateFrom: '2014/05',
        dateTo: '2022/05',
        companyName: 'Morix',
        companyLogo: 'morix.svg',
        companyUrl: 'https://morix.al/',
        position: 'Frontend Developer',
        description: 'Creating Web Applications, Websites from scratch or with CMS and also creating graphics with Adobe Photoshop or Adobe Illustrator.'
    },
    {
        id: 2,
        dateFrom: '2013/02',
        dateTo: '2014/06',
        companyName: 'Ionian',
        companyLogo: 'ionian.svg',
        companyUrl: 'https://ionian.co/',
        position: 'Frontend Developer',
        description: 'Creating Websites with CMS like Drupal, WordPress or Joomla.'
    },
    {
        id: 1,
        dateFrom: '2012/09',
        dateTo: '2013/06',
        companyName: 'Nils Bor',
        companyLogo: 'nilsbor.svg',
        companyUrl: 'https://nilsbor.al/',
        position: 'IT Teacher & Webmaster',
        description: 'Teacher for the subject of Computer Science, IT Maintenance and Webmaster.'
    }
];

export default function Experience() {
    return (
        experiences.map(function (element) {
            const renderLogo = () => {
                const name = element.companyName;
                const logo = element.companyLogo;
                let logoUrl = '';

                if (logo) {
                    logoUrl = `/images/experience/${logo}`;
                }
                else {
                    logoUrl = '/images/empty.svg';
                }
                return <img src={logoUrl} alt={`${name} Logo`} width="40px" height='40px' />
            }

            const renderLink = () => {
                const name = element.companyName;
                const url = element.companyUrl;

                if (url) {
                    return <Link href={url}><a target="_blank" rel="noopener" title={name}>{name}</a></Link>;
                }
                else {
                    return name;
                }
            }

            const renderDate = () => {
                const dateFrom = element.dateFrom;
                let dateTo = element.dateTo;

                if (dateTo) {
                    return dateFrom + ' - ' + dateTo;
                }
                else {
                    return dateFrom;
                }
            }

            return (
                <Waypoint
                    key={`experience_${element.id}_key`}
                    onEnter={_onEnter.bind(this, 'exp' + element.id, 'show')}
                    onLeave={_onLeave.bind(this, 'exp' + element.id, 'show')}
                >
                    <div id={'exp' + element.id} className={styles.inner}>
                        <div className={styles.logo}>{renderLogo()}</div>
                        <div className={styles.info}>
                            <div>
                                <span className={styles.date}>{renderDate()}</span>
                                <span className={styles.at}>@</span>
                                <span className={styles.name}>{renderLink()}</span>
                            </div>
                            <div>
                                <span className={styles.position}>{element.position}</span>
                            </div>
                            <div>
                                <span className={styles.description}>{element.description}</span>
                            </div>
                        </div>
                    </div>
                </Waypoint>
            )
        })
    )
}