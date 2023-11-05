import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import Input from './inputs/Input'
import TextArea from './inputs/TextArea'
import Button from './buttons/Button'
import Popup from './Popup'

export default function Form() {

  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    console.log({ data })
    setSent(true)
    reset()
    let response = await fetch('api/sendEmail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    response = await response.json()
    console.log({response})
    
    setSent(false)
  }

  return (
    <>
      <form className='Form' onSubmit={handleSubmit(onSubmit)}>
        <Input id={'name'} text={'Nombre'} type={'text'} inputOpt={{ ...register("name", { required: true })}} />
        <Input id={'email'} text={'Email'} type={'email'} inputOpt={{ ...register("email", { required: true }) }} />
        <TextArea id={'message'} text={'Mensaje'} inputOpt={{ ...register("message", { required: true }) }} />
        
        <Button text={'Enviar'} icon={'icon-paperPlane'} type='submit' />
      </form>
      {sent ? <Popup/> : null } 
    </>
  )
}
