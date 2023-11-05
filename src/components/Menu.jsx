import React, { useEffect, useState } from 'react'

export default function Menu({ setRotate, classes = '', navigate}) {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  },[])

  if(!ready) return <></>

  return (
    <ul className={'Menu '+classes}>
      <li className={navigate.currentSection == 'Aboutme' ? 'active' : null}>
        <a href="#Aboutme" onClick={() => { setRotate(); }}>
        <i className='icon icon-user' /> Acerca de mí</a>
      </li>
      <li className={navigate.currentSection == 'Skills' ? 'active' : null}>
        <a href="#Skills" onClick={() => { setRotate(); }}>
        <i className='icon icon-idea' /> Habilidades</a>
      </li>
      <li className={navigate.currentSection == 'Projects' ? 'active' : null}>
        <a href="#Projects" onClick={() => { setRotate(); }}>
        <i className='icon icon-skills' /> Proyectos</a>
      </li>
      <li className={navigate.currentSection == 'Contact' ? 'active' : null}>
        <a href="#Contact" onClick={() => { setRotate(); }}>
        <i className='icon icon-send' /> Contáctame</a>
      </li>
    </ul>
  )
}
