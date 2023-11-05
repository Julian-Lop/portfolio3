import React from 'react'

export default function EmailTemplate({name,email,message}) {
  return (
    <div style={{ background:'#f2f2f2', borderRadius: '10px', padding: '25px'}}>
      <h2 style={{color: '#8093ff'}}>De: {name}</h2>
      
      <strong style={{color: '#242e66'}}>{email}</strong>

      <p style={{color: '#242e66cc', fontWeight: '600px'}}>{message}</p>
    </div>
  )
}
