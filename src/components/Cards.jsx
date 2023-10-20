import React from 'react'
import Card from './Card'

export default function Cards() {

  const tencologies = [
    {
      title: 'Node js',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-nodejs'
    },
    {
      title: 'React',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-react'
    },
    {
      title: 'Next js',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-nextjs'
    },
    {
      title: 'Sass',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-sass'
    },
    {
      title: 'Less',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-less'
    },
    {
      title: 'Redux',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-redux'
    },
    {
      title: 'Postgresql',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-postgresql'
    },
    {
      title: 'MongoDB',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-mongodb'
    },
    {
      title: 'ORMsequelize',
      descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'icon-orm'
    },
  ]

  return (
    <div className='Cards'>
        {
          tencologies.map((tecnology) => 
            <Card
              title={tecnology.title}
              descrip={tecnology.descrip}
              icon={tecnology.icon}
              key={tecnology.title}
            />
          )
        }
    </div>
  )
}
