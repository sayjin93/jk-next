import { Waypoint } from 'react-waypoint';
import { _onEnter, _onLeave } from '../../helpers';

import styles from './index.module.scss'

const blog = [
    {
        id: 1,
        name: 'Web Development',
        icon: "code",
        content: "Creating websites, web applications, plugins or any required part of code with latest web technologies.",
    },
    {
        id: 2,
        name: 'UX / UI Design',
        icon: "window-restore",
        content: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages.",
    },
    {
        id: 3,
        name: 'Branding',
        icon: "copyright",
        content: "Creating fully unique designs for branding your business like logo, business card, invoices, etc...",
    },
    {
        id: 4,
        name: 'Social Media',
        icon: "hashtag",
        content: "Administrating your companie or personal social media accounts with marketing, advertising campaigns and much more...",
    },
    {
        id: 5,
        name: 'Hosting Provider',
        icon: "server",
        content: "Creating websites, web applications, plugins or any required part of code with latest web technologies.",
    },
    {
        id: 6,
        name: 'Quick Support',
        icon: "headset",
        content: "Offering very fast professional support for all customer needs by phone, email or social media applications.",
    },
]

export default function Blog() {
    return (
        <div id="blog" className="section hasBG">
            <div className="container">
                <h1 className="title">My Blog</h1>

                <div className={styles.wrapper}>

                    {blog.map(function (element) {
                        return (
                            <Waypoint
                                key={`service_${element.id}_key`}
                                onEnter={_onEnter.bind(this, 'service' + element.id, 'show')}
                                onLeave={_onLeave.bind(this, 'service' + element.id, 'show')}
                            >
                                <div id={'service' + element.id} className={styles.col}>
                                    <div className={styles.icon}>
                                        <i className={`fa-solid fa-${element.icon}`} />
                                    </div>
                                    <div className={styles.title}>{element.name}</div>
                                    <div className={styles.text}>{element.content}</div>
                                </div>
                            </Waypoint>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}