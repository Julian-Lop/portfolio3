import React, { useState } from 'react'

/**
 * * Components
 */
import Menu from './Menu'

export default function Navbar() {

  /**
   * Rotar icon menu y ocultar navbar
   */
  const [rotate, setRotate] = useState(false)
  const [menu, setMenu] = useState('')

  /**
   *  Abrir y cerrar menú
   */
  const toggleMenu = () => {
    if(rotate){
      setMenu('disabled')
    } else {
      setMenu('enabled')
    }
    setRotate(!rotate)
  }

  return (
    <nav className={!rotate ? 'Navbar' : 'Navbar disabled'}>
      <i
        className={rotate ? 'icon icon-menu rotate' : 'icon icon-menu'}
        onClick={() => toggleMenu()}
      />
      <Menu classes={menu} setRotate={toggleMenu}/>
    </nav>
  )
}
