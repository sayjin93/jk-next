import dynamic from 'next/dynamic';

const Jarallax = dynamic(() => import('../@others/jarallax/Jarallax'), { ssr: false });
import JarallaxImage from '../@others/jarallax/JarallaxImage';

import styles from './index.module.scss'

const testimonials = [
    {
        id: 1,
        name: 'Antonio Baraley',
        position: "CEO Founder",
        quote: "Jurgen is easy to work with and helped me make amazing websites in a short amount of time. Thanks for works.",
    },
];

export default function Testimonials() {
    return (
        <div id="testimonials" className="section">
            <Jarallax speed={0.2}>
                <JarallaxImage src="/images/slider/3.jpg" alt="Castle of Gjirokastra" />
                <div className="overlay"></div>
                {testimonials.map(function (element) {
                    return (
                        <div key={`testimonial_${element.id}_key`} className="container">
                            <div className={styles.quote}>
                                <div className={styles.icon}>
                                    <i className="fa-solid fa-quote-left"></i>
                                </div>

                                <div className={styles.text}>
                                    <p>{element.quote}</p>
                                    <div className={styles.title}>
                                        <h3 className={styles.name}>{element.name}</h3>
                                        <h3 className={styles.position}>{element.position}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Jarallax>
        </div>
    )
}