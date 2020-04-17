import { ReactChild, ButtonHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactChild
    typeButton: string
}