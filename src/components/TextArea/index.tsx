import { TextareaHTMLAttributes } from "react"
import styles from './textarea.module.scss'

type TextAreaProps = {
  width?: string,
  height?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({ width, height }: TextAreaProps) {
  return <textarea className={styles.textarea} style={{ width, height }} />
}