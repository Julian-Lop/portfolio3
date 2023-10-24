import React from 'react'

export default function Input({id,text,type}) {
  return (
    <div className="InputContainer">
      <input type={type} name={id} id={id} className="input" placeholder="a"/>
      <label htmlFor={id} className="label">{text}</label>
    </div>
  )
}
