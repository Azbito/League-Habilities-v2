import styles from './items.module.scss'

type ItemsProps = {
  image1?: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  image6?: string,
  alt1?: string,
  alt2?: string,
  alt3?: string,
  alt4?: string,
  alt5?: string,
  alt6?: string
}

export default function Items({ image1, image2, image3, image4, image5, image6, alt1, alt2, alt3, alt4, alt5, alt6 }: ItemsProps) {
  return (
    <div>
      <div className={styles.titles}>
        <p className={styles.title}>Items</p>
        <p className={styles.subtitle}>Do you want to try get a skin? Try your lucky!</p>
      </div>
      <div className={styles.items}>
        <img src={image1} alt={alt1} />
        <img src={image2} alt={alt2} />
        <img src={image3} alt={alt3} />
        <img src={image4} alt={alt4} />
        <img src={image5} alt={alt5} />
        <img src={image6} alt={alt6} />
      </div>
    </div>
  )
}