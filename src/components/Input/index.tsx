import { InputHTMLAttributes } from "react"
import styles from './input.module.scss'

export type InputProps = {
  width?: number,
  height?: number
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ width, height, ...props }: InputProps) {
  return (
    <input className={styles.input} style={{ width, height }} {...props} />
  )
}