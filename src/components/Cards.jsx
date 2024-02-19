import React from 'react'
import Card from './Card'

export default function Cards() {

  const tencologies = [
    {
      icon: 'icon-nodejs'
    },
    {
      icon: 'icon-react'
    },
    {
      icon: 'icon-nextjs'
    },
    {
      icon: 'icon-sass'
    },
    {
      icon: 'icon-less'
    },
    {
      icon: 'icon-redux'
    },
    {
      icon: 'icon-postgresql'
    },
    {
      icon: 'icon-mongodb'
    },
    {
      icon: 'icon-orm'
    },
  ]

  return (
    <div className='Cards'>
        {
          tencologies.map((tecnology,i) => 
            <Card
              icon={tecnology.icon}
              index={i}
              key={i*100}
            />
          )
        }
    </div>
  )
}
