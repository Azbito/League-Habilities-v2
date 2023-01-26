import styles from '../../styles/prestige.module.scss'

type PrestigeProps = {
  title: string,
  description: string,
  splashart: string,
  alt: string,
  margin?: string,
  width?: string,
  height?: string,
  borderRadius: string
}

export default function Prestige({ title, description, splashart, alt, height, margin, width, borderRadius }: PrestigeProps) {
  return (
    <div className={styles.prestige}>
      <div className={styles.prestigeinfo}>
        <h1 className={styles.prestigetitle}>{title}</h1>
        <p className={styles.prestigedescription}>{description}</p>
      </div>
      <img className={styles.img} src={splashart} alt={alt} style={{ margin, height, width, borderRadius }} />
    </div>
  )

}