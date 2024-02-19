import React from 'react'

export default function Card({icon,index}) {
  return (
    <div className='Card'>
      <i className={`icon ${icon}`} style={{ '--index': index }} />
    </div>
  )
}
