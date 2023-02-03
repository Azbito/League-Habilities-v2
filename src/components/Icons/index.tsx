import styles from './icons.module.scss'

type IconsProps = {
  icon: string,
  margin?: string,
  height?: string,
  width?: string,
  borderRadius: string,
  title: string
}

export default function Icons({ icon, margin, height, width, borderRadius, title }: IconsProps) {
  return (
    <div className={styles.iconsbox}>
      <p className={styles.title}>Icon</p>
      <img src={icon} alt="icon" style={{ margin, height, width, borderRadius }} />
      <p>{title}</p>
    </div>
  )
}