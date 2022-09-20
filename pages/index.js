import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import MoveTop from '../components/@others/moveTop'
import Sidebar from '../components/sidebar'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Services from '../components/services'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Prices from '../components/prices'
import Stats from '../components/stats'

export default function Home() {
  return (
    <>
      <Head>
        <title>JK Solutions</title>
        <meta name="description" content="Jurgen Kruja Personal Site" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#020d23" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Sidebar />

      <main className="content">

        <About />

        <Skills />

        <Timeline />

        <Services />

        <Works />

        <Testimonials />

        <Prices />

        <Stats />

        <MoveTop />

      </main>
    </>
  )
}
