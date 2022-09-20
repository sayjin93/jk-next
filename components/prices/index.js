import Link from 'next/link'

import styles from './index.module.scss'

const prices = [
    {
        id: 1,
        icon: 'fa-bolt',
        name: 'Small',
        price: 2.99,
        featured: false,
        features: {
            disk_space: 1,
            bandwidth: 5,
            ftp_account: 1,
            email_accounts: 5,
            database: 1,
            subdomains: 5,
            addons_domain: 0,
            administration: 'cPanel'
        }
    },
    {
        id: 2,
        icon: 'fa-rocket',
        name: 'Medium',
        price: 4.99,
        featured: true,
        features: {
            disk_space: 5,
            bandwidth: 10,
            ftp_account: 3,
            email_accounts: 10,
            database: 3,
            subdomains: 10,
            addons_domain: 1,
            administration: 'cPanel'
        }
    },
    {
        id: 3,
        icon: 'fa-fire',
        name: 'Professional',
        price: 6.99,
        featured: false,
        features: {
            disk_space: 20,
            bandwidth: 100,
            ftp_account: 20,
            email_accounts: 100,
            database: 10,
            subdomains: 30,
            addons_domain: 10,
            administration: 'cPanel'
        }
    },
]

export default function Prices() {
    return (
        <div id="prices" className="section hasBG">
            <div className="container">
                <h1 className="title">Hosting Prices</h1>

                <div className={styles.wrapper}>

                    {prices.map(function (element) {
                        return (
                            <div key={`price_${element.id}_key`} className={styles.col}>
                                <div className={`${styles.col_inner} ${element.featured ? styles.featured : ""}`}>
                                    <i className={`${styles.icon} fa-solid ${element.icon}`} />
                                    <h3 className={styles.title}>{element.name}</h3>
                                    <h2 className={styles.price}>{element.price} €/month</h2>

                                    <ul className={styles.features}>
                                        <li>{element.features.disk_space} Disk Space</li>
                                        <li>{element.features.bandwidth} Bandwidth</li>
                                        <li>{element.features.ftp_account} Ftp {element.features.ftp_account > 1 ? "Accounts" : "Account"}</li>
                                        <li>{element.features.email_accounts} Email Accounts</li>
                                        <li>{element.features.database} {element.features.database > 1 ? "Databases" : "Database"}</li>
                                        <li>{element.features.subdomains} Subdomains</li>
                                        <li>{element.features.addons_domain} Addon Domain</li>
                                        <li>{element.features.administration} Administration</li>
                                    </ul>

                                    <Link href='#'><a className={styles.button}><span>Select</span></a></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}