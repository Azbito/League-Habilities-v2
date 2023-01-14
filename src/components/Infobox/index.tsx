import Image from "next/image";
import styles from './infobox.module.scss'

type InfoBoxProps = {
  image: string,
  alt: string,
  title: string,
  description: string,
  margin: string
}

export default function InfoBox({ image, alt, title, description, margin }: InfoBoxProps) {
  return (
    <div className={styles.infobox} style={{ margin }}>
      <Image className={styles.star} src={image} alt={alt} width={60} height={60} />
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>

  )
}