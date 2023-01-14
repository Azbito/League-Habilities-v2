import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './news.module.scss'

type NewsProps = {
  image: string,
  alt: string,
  title: string,
  description: string,
  strong: string,
  linkto: string,
  linkimage: string,
  linkalt: string,
  patchimage: string,
  patchalt: string
}

export default function News({ image, alt, title, description, strong, linkto, linkimage, linkalt, patchimage, patchalt }: NewsProps) {
  const router = useRouter()
  return (
    <div className={styles.news} >
      <Image className={styles.newspaper} src={image} alt={alt} width={60} height={60} />
      <h1>{title}</h1>
      <p>{description}</p>
      <strong onClick={() => router.push(linkto)}>{strong}<Image className={styles.linkimage} src={linkimage} alt={linkalt} width={10} height={10} /></strong>
      <Image className={styles.patch} src={patchimage} alt={patchalt} width={682} height={384} />
    </div>
  )
}