import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface iInputProps{
    label?: string;
    id: string;
    type: "text" | "email" | "password" | "number";
    placeholder?: string;
    autoComplete?: string;
    disabled?: boolean;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

const Input = ({ type, id, label, placeholder, autoComplete, disabled, register, error }: iInputProps) => {
  return (
    <fieldset>
        {label && <label htmlFor={id}>{label}</label>}
        <input type={type} id={id} placeholder={placeholder} autoComplete={autoComplete} {...register} disabled={disabled}/>
        {/* {error && <p>{error.message}</p>} */}
    </fieldset>    
  )
}

export default Input