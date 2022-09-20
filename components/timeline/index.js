import Experience from "./parts/experience";
import Education from "./parts/education";

import styles from './index.module.scss'

export default function Timeline() {
    return (
        <div id="timeline" className="section">
            <div className="container">
                <h1 className="title">Period of Development</h1>

                <div className={styles.wrapper}>
                    <div className={styles.col}>
                        <Experience />
                    </div>
                    <div className={styles.col}>
                        <Education />
                    </div>
                </div>

            </div>
        </div>
    )
}