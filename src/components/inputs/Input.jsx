import React from 'react'

export default function Input({id,text,type}) {
  return (
    <div class="InputContainer">
      <input type={type} name={id} id={id} className="input" placeholder="a"/>
      <label for={id} className="label">{text}</label>
    </div>
  )
}
