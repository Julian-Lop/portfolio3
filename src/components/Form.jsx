import React from 'react'
import Input from './inputs/Input'
import TextArea from './inputs/TextArea'
import Button from './buttons/Button'

export default function Form() {
  return (
    <form className='Form'>
        <Input id={'name'} text={'Nombre'} type={'text'} />
        <Input id={'email'} text={'Email'} type={'email'} />
        <TextArea  id={'message'} text={'Mensaje'}/>
        
        <Button text={'Enviar'} />
    </form>
  )
}
