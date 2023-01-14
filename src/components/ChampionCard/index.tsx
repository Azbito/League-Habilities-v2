import Image from "next/image"
import Button, { ButtonProps } from "../Button"
import styles from "./championcard.module.scss"

type ChampionCardProps = {
  title: string,
  image: string,
  alt: string,
  description: string,
  margin?: string,
  buttonProps?: ButtonProps
}

export default function ChampionCard({ title, image, alt, description, margin, buttonProps }: ChampionCardProps) {
  return (
    <div className={styles.name} style={{ margin }}>
      <h1 className={styles.title}>{title}</h1>
      <Image className={styles.splashart} src={image} alt={alt} width={150} height={300} />
      <p className={styles.description}>{description}</p>
      {buttonProps && <Button {...buttonProps} />}
    </div>
  )
}