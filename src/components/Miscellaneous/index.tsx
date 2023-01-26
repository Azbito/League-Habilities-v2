import styles from '../../styles/miscellaneous.module.scss'

type MiscellaneousProps = {
  img: string,
  alt: string,
  data: string[]
}

export default function Miscellaneous({ img, alt, data }: MiscellaneousProps) {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Miscellaneous</p>
      <img src={img} alt={alt} />
      {data.map((item: any) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}