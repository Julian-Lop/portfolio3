import React from 'react'

export default function Loading() {
  return (
    <div style={{ margin: 'auto', top: 0, bottom: 0, left: 0, right: 0, width: '100dvw', height:'100dvh',position: 'fixed', background: '#f2f2f2', zIndex: 10000 }}>
      <i className='icon icon-menu rotate-infinite' style={{ margin: 'auto', top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} />
    </div>
  )
}
