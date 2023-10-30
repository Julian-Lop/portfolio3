import React from 'react'

export default function Input({id,text,type,inputOpt}) {
  return (
    <div className="InputContainer">
      <input type={type} name={id} id={id} className="input" placeholder="a" {...inputOpt} />
      <label htmlFor={id} className="label">{text}</label>
    </div>
  )
}
