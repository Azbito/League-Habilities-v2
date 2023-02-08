import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import styles from './skins.module.scss'
import Button from "../Button";

export interface SkinsDataProps {
  skinTitle: string,
  skinImage: string,
  skinAlt: string
  id: number
}

type SkinProps = {
  skinsData: SkinsDataProps[]
}

export default function Skins({
  skinsData
}: SkinProps) {

  return (
    <div className={styles.container}>

      <p className={styles.title}>Skins</p>

      <Carousel className={styles.carousel} autoPlay interval={2000}>

        {skinsData.map(item => (
          <div className={styles.skins} key={item.id}>
            <p className={styles.skinName}>{item.skinTitle}</p>
            <Image className={styles.splashart} src={item.skinImage} alt={item.skinAlt} width={608} height={359} />
          </div>
        ))}

      </Carousel>


    </div>
  )
}