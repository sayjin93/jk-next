import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


import styles from '../styles/Home.module.scss'

import Sidebar from '../components/sidebar'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Services from '../components/services'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Prices from '../components/prices'
import Stats from '../components/stats'

import MoveTop from '../components/@others/moveTop'
import Blog from '../components/blog'
import Contact from '../components/contact'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

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

        <Blog />

        <Contact />

        <MoveTop />

        <AnimatedCursor clickables={[
          'a',
          '#moveTop',
          'div[class^="works_filter"]'
        ]} />

      </main>
    </>
  )
}
