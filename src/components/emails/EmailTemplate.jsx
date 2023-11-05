import React from 'react'

export default function EmailTemplate({name,email,message}) {
  return (
    <div style={{ background: 'blue', borderRadius: '20px'}}>
      <h2>De: {name}</h2>
      <hr />
      <strong>{email}</strong>

      <p>{message}</p>
    </div>
  )
}
