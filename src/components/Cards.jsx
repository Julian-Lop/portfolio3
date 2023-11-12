import React from 'react'
import Card from './Card'

export default function Cards() {

  const tencologies = [
    {
      title: 'Node js',
      descrip: 'Es un entorno de ejecución de JavaScript del lado del servidor.',
      icon: 'icon-nodejs'
    },
    {
      title: 'React',
      descrip: 'Es una libreria de JavaScript, utilizada para construir interfaces de usuario interactivas y eficientes.',
      icon: 'icon-react'
    },
    {
      title: 'Next js',
      descrip: 'Es un Framework de React que facilita la creación de aplicaciones web, con características avanzadas y un rendimiento optimizado.',
      icon: 'icon-nextjs'
    },
    {
      title: 'Sass',
      descrip: 'preprocesador de CSS que extiende las capacidades del CSS convencional.',
      icon: 'icon-sass'
    },
    {
      title: 'Less',
      descrip: 'preprocesador de CSS que está diseñado para hacer la escritura y mantenimiento del código CSS más eficiente y estructurado.',
      icon: 'icon-less'
    },
    {
      title: 'Redux',
      descrip: 'Libreria de gestión de estado para aplicaciones en JavaScript, especialmente para React.',
      icon: 'icon-redux'
    },
    {
      title: 'Postgresql',
      descrip: 'Base de datos conocida por su confiabilidad, capacidad para manejar grandes volúmenes de datos y su adhesión a los estándares de SQL.',
      icon: 'icon-postgresql'
    },
    {
      title: 'MongoDB',
      descrip: 'Base de datos NoSQL que se caracteriza por su enfoque orientado a documentos.',
      icon: 'icon-mongodb'
    },
    {
      title: 'ORMsequelize',
      descrip: 'Libreria para Node js que se utiliza con base de datos realcionales. Facilita la interacción con la base de datos utilizando modelos y consultas basadas en objetos JavaScript en lugar de SQL directo.',
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
