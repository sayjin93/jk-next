import Link from 'next/link'
import Image from 'next/image'

import Menu from './parts/menu'
import Links from './parts/links'

import styles from './index.module.scss'

import logo from '../../public/logo.svg'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.inner}>

                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <Image src={logo} alt="jk logo" />
                        </a>
                    </Link>
                </div>

                <Menu />

                <Links />
            </div>
        </div>
    )
}