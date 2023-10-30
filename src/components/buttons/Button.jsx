import React, { useState } from 'react'

export default function Button({ text, icon = null,type='button', download = false }) {
  const [check, setCheck] = useState(false)

  if (download) return (
    <a
      href="/documents/CV_Julian_Lopez_desarrollador_web.pdf"
      download="CV_JulianLopez_Desarrollador_Web"
      onClick={() => setCheck(true)}
    >
      <button className='Button' type={type}>
        {text}
        {!check ?
          <i style={{ marginLeft: '8px' }} className={'icon ' + icon} />
          :
          <i style={{ marginLeft: '8px' }} className={'icon icon-check'} />
        }
      </button>
    </a>
  )
  
  return (
    <button className='Button'>
      {text}
      {icon ? <i style={{ marginLeft: '8px' }} className={'icon ' + icon} /> : null }
    </button>
  )
}
