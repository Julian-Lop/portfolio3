import React, { useEffect, useState } from 'react'

export default function Menu({ setRotate, classes = ''}) {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  },[])

  if(!ready) return <></>

  return (
    <ul className={'Menu '+classes}>
      <li className={window.location.href.includes('Aboutme') ? 'active' : null}>
        <a href="#Aboutme" onClick={() => setRotate()}>
        <i className='icon icon-user' /> Acerca de mí</a>
      </li>
      <li className={window.location.href.includes('Skills') ? 'active' : null}>
        <a href="#Skills" onClick={() => setRotate()}>
        <i className='icon icon-skills' /> Habilidades</a>
      </li>
      <li className={window.location.href.includes('Projects') ? 'active' : null}>
        <a href="#Projects" onClick={() => setRotate()}>
        <i className='icon icon-idea' /> Proyectos</a>
      </li>
      <li className={window.location.href.includes('Contact') ? 'active' : null}>
        <a href="#Contact" onClick={() => setRotate()}>
        <i className='icon icon-send' /> Contáctame</a>
      </li>
    </ul>
  )
}
