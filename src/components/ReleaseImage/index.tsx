import Image from "next/image";
import styles from './releaseimage.module.scss'

type ReleaseImageProps = {
  releaseimage: string,
  releaseimgalt: string,
  releaseimgmargin?: string
}

export default function ReleaseImage({ releaseimage, releaseimgalt, releaseimgmargin }: ReleaseImageProps) {
  return (
    <div className={styles.release}>
      <div className={styles.banner}>
        <Image className={styles.releaseimage} src={releaseimage} alt={releaseimgalt} width={1920} height={1091} style={{ margin: releaseimgmargin }} />
      </div>
      <div className={styles.infobox}>
        <h1 className={styles.title}>Enjoy with our new Legends!</h1>
        <p className={styles.description}>Set off fireworks, and let's enjoy and battle together!</p>
        <p className={styles.detaileddescription}>
          Immerse yourself in the world of Mythic Makers, where legendary figures are graced with delicate paper crafts and empowered by a powerful resolve. But watch out, as their battle has just begun.</p>
      </div>
    </div>
  )
}