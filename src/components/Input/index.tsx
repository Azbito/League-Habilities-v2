import { InputHTMLAttributes } from "react"
import styles from './input.module.scss'

export type InputProps = {
  width?: string,
  height?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ width, height, ...props }: InputProps) {
  return (
    <input className={styles.input} style={{ width, height }} {...props} />
  )
}