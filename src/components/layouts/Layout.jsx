import React from 'react'
import Head from 'next/head'

//Vercel Speed Insgihts
import { SpeedInsights } from '@vercel/speed-insights/next';


/**
 * * Components
 */
import Navbar from '../Navbar'
import Footer from '../Footer'


export default function Layout({ children, title, currentSection, setCurrentSection }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portafolio desarrolador web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setCurrent={setCurrentSection} currentSection={currentSection} />
      <main className='Layout' >
        {children}
        <SpeedInsights />
      </main>
      <Footer/>
    </>
  )
}
