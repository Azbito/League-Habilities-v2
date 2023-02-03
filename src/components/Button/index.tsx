import { ButtonHTMLAttributes } from "react"
import Spinner from "../Spinner"
import styles from './button.module.scss'

export type ButtonProps = {
  title: string,
  margin?: string,
  padding?: string,
  isBlue?: boolean,
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, margin, padding, isBlue, isLoading, ...props }: ButtonProps) {
  return <button className={isBlue ? styles.blue : styles.button} style={{ margin, padding }} {...props}>
    {isLoading ? <Spinner /> : title}
  </button>
}