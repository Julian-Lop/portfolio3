import React from 'react'

export default function TextArea({id,text}) {
  return (
    <div class="TextAreaContainer">
      <textarea name={id} id={id} className="textArea" placeholder='a'/>
      <label for={id} className="label">{text}</label>
    </div>
  )
}
