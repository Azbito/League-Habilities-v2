import { border } from "@mui/system"
import Image from "next/image"
import { ButtonHTMLAttributes } from "react"
import Spinner from "../Spinner"
import styles from './button.module.scss'

export type ButtonProps = {
  title?: string,
  margin?: string,
  padding?: string,
  isBlue?: boolean,
  isLoading?: boolean
  borderRadius?: string,
  width?: string,
  height?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, margin, padding, borderRadius, width, height, isBlue, isLoading, ...props }: ButtonProps) {
  return <button className={isBlue ? styles.blue : styles.button} style={{ margin, padding, borderRadius, width, height }} {...props}>
    {isLoading ? <Spinner /> : title}
  </button>
}