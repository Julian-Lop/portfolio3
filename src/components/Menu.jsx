import React from 'react'

export default function Menu({setRotate}) {
  return (
    <ul className='Menu'>
      <li>
        <a href="#" onClick={() => setRotate(false)}>
        <i className='icon icon-user' /> Acerca de mí</a>
      </li>
      <li>
        <a href="#" onClick={() => setRotate(false)}>
        <i className='icon icon-skills' /> Habilidades</a>
      </li>
      <li>
        <a href="#" onClick={() => setRotate(false)}>
        <i className='icon icon-idea' /> Proyectas</a>
      </li>
      <li>
        <a href="#" onClick={() => setRotate(false)}>
        <i className='icon icon-send' /> Contáctame</a>
      </li>
    </ul>
  )
}
