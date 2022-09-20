import Link from 'next/link'
import styles from '../index.module.scss'

const menu = [
    {
        id: 1,
        name: 'Home',
        href: 'home',
    },
    {
        id: 2,
        name: 'About',
        href: 'about',
    },
    {
        id: 3,
        name: 'Skills',
        href: 'skills',
    },
    {
        id: 4,
        name: 'Timeline',
        href: 'timeline',
    },
    {
        id: 5,
        name: 'Services',
        href: '',
    },
    {
        id: 6,
        name: 'Portfolio',
        href: 'portfolio',
    },

    {
        id: 7,
        name: 'Hosting',
        href: 'prices',
    },
    {
        id: 8,
        name: 'Blog',
        href: 'blog',
    },
    {
        id: 9,
        name: 'Contact',
        href: 'contact',
    },

]

export default function Menu() {

    return (
        <div className={styles.menu}>
            <ul>
                {menu.map(function (element) {
                    return (
                        <li key={`sidebar_menu_${element.id}_key`}>
                            <Link href={`/#${element.href}`}><a>{element.name}</a></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}