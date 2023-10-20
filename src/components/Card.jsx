import React from 'react'

export default function Card({title,descrip,icon}) {
  return (
    <div className='Card'>
      <div className='icon-section'>
        <i className={`icon ${icon}`} />
      </div> 
      <div className='info-section'>
        <h4>
          {title}
        </h4>
        <p>
          {descrip}
        </p>
      </div>
    </div>
  )
}
