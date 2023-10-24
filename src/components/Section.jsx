import React, { useEffect, useRef } from 'react'

import useDetector from '@/hooks/useDetector';

export default function Section({ children, id, classes, setCurrentSection }) {
  
  const sectionRef = useRef()
  
  const detector = useDetector({ sectionName: id, ref: sectionRef })

  useEffect(() => {
    if (detector) {
      setCurrentSection(detector) 
    }
  },[detector])

  return (
    <section className={'Section '+classes} id={id} ref={sectionRef}>
      {children}
    </section>
  )
}
