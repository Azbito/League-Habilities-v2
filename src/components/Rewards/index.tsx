import styles from './rewards.module.scss'

type RewardsProps = {
  title: string,
  description: string,
  strong?: string
}

export default function Rewards({ title, description, strong }: RewardsProps) {
  return (
    <div className={styles.rewardsbox}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}<strong className={styles.strong}>{strong}</strong></p>
    </div>
  )
}