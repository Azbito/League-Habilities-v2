import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './adbox.module.scss'

type AdBoxProps = {
  description: string,
  strong: string,
  image: string,
  alt: string,
  linkto: string,
  backgroundColor: string,
  margin?: string,
  width?: string,
  height?: string,
  descriptionmargin?: string
}


export default function AdBox({ description, strong, image, alt, linkto, backgroundColor, margin, width, height, descriptionmargin }: AdBoxProps) {
  const router = useRouter()
  return (
    <div className={styles.ad} style={{ backgroundColor, margin, width, height }}>
      <p className={styles.adinfo} style={{ margin: descriptionmargin }}>{description} <strong className={styles.link} onClick={() => router.push(linkto)}>{strong} <Image className={styles.linkimage} src={image} alt={alt} width={10} height={10} /></strong>
      </p>
    </div>
  )
}