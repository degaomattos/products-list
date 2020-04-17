import React from 'react'
import { ButtonProps } from './button.interface'
import './button.sass'

export default function Button(props: ButtonProps){
    const { children, typeButton } = props
    return (
        <button 
            className={typeButton} 
            {...props}
        >{children}</button>
    )
}