import React from 'react'
import Head from 'next/head'

/**
 * * Components
 */
import Navbar from '../Navbar'
import Footer from '../Footer'


export default function Layout({children,title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portafolio desarrolador web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className='Layout' >
        {children}
      </main>
      <Footer/>
    </>
  )
}
