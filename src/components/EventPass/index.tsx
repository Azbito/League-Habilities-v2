import Image from "next/image";
import styles from './eventpass.module.scss'

type EventPassProps = {
  title: string,
  passimg: string,
  altpassimg: string,
  description: string
}

export default function EventPass({ passimg, altpassimg, title, description }: EventPassProps) {
  return (
    <div className={styles.passinfo}>
      <p className={styles.title}>{title}</p>
      <Image src={passimg} alt={altpassimg} width={256} height={256} />
      <p className={styles.description}>{description}</p>
    </div>
  )
}