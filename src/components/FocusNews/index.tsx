import Image from "next/image"
import Button, { ButtonProps } from "../Button"
import styles from './focusrelease.module.scss'

type FocusReleaseProps = {
  title: string,
  image: string,
  alt: string,
  description: string,
  width?: number,
  height?: number,
  margin?: string

  buttonProps?: ButtonProps
}

export default function FocusRelease({ title, image, alt, description, width, height, margin, buttonProps }: FocusReleaseProps) {
  return (
    <div className={styles.name}>
      <h1 className={styles.title}>{title}</h1>
      <Image className={styles.splashart} src={image} alt={alt} width={width} height={height} style={{ margin }} />
      <p className={styles.description}>{description}</p>
      {buttonProps && <Button {...buttonProps} />}
    </div>
  )
}