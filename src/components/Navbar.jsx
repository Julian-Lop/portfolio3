import React, { useState } from 'react'

/**
 * * Components
 */
import Menu from './Menu'

export default function Navbar() {

  /**
   * Abrir menú
   */
  const [rotate, setRotate] = useState(false)

  return (
    <nav className={!rotate ? 'Navbar' : 'Navbar disabled'}>
      <i
        className={rotate ? 'icon icon-menu rotate' : 'icon icon-menu'}
        onClick={() => setRotate(!rotate)}
      />
      {rotate ? <Menu setRotate={setRotate}/> : null}
    </nav>
  )
}
