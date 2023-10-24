import React from 'react'

export default function TextArea({id,text}) {
  return (
    <div className="TextAreaContainer">
      <textarea name={id} id={id} className="textArea" placeholder='a'/>
      <label  htmlFor={id} className="label">{text}</label>
    </div>
  )
}
