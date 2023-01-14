import { ButtonHTMLAttributes } from "react"
import styles from './button.module.scss'

export type ButtonProps = {
  title: string,
  margin?: string,
  isBlue?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, margin, isBlue, ...props }: ButtonProps) {
  return <button className={isBlue ? styles.blue : styles.button} style={{ margin }} {...props}>{title}</button>
}