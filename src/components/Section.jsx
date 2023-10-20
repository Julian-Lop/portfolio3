import React from 'react'

export default function Section({children,id,classes}) {
  return (
    <section className={'Section '+classes} id={id}>
      {children}
    </section>
  )
}
