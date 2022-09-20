import Link from 'next/link'
import styles from '../index.module.scss'

const links = [
    {
        id: 1,
        title: 'LinkedIn',
        href: 'https://al.linkedin.com/in/jurgenkruja',
        icon: 'fa-brands fa-linkedin-in'
    },
    {
        id: 2,
        title: 'Github',
        href: 'https://github.com/sayjin93',
        icon: 'fa-brands fa-github'
    },
    {
        id: 3,
        title: 'Gitlab',
        href: 'https://gitlab.com/sayjin93',
        icon: 'fa-brands fa-gitlab'
    },
    {
        id: 4,
        title: 'Google Play',
        href: 'https://play.google.com/store/apps/developer?id=Jurgen+Kruja',
        icon: 'fa-brands fa-google-play'
    },
    {
        id: 5,
        title: 'Codepen',
        href: 'https://codepen.io/sayjin93',
        icon: 'fa-brands fa-codepen'
    },
    {
        id: 6,
        title: 'jsFiddle',
        href: 'https://jsfiddle.net/user/sayjin93',
        icon: 'faJsfiddle'
    },
];

export default function Links() {
    return (
        <div className={styles.social}>
            <div className={styles.inner}>
                <ul>
                    {links.map(function (element) {
                        return (
                            <li key={`sidebar_link_${element.id}_key`}>
                                <Link href={element.href} >
                                    <a target="_blank" rel="noopener" title={element.title}>
                                        <i className={element.icon} />
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}