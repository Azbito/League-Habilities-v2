import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/about.module.scss'

export default function About() {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Warning!</h1>
        <strong className={styles.warning}>This website IS NOT for commercial purpose. All the rights of League of Legends belongs to Riot Games</strong>
        <p>This website was made by Azbito</p>
        <button className={styles.github}>
          <Image className={styles.githubimage} src="/images/github.png" alt="github" width={30} height={30}
            onClick={() => router.push('https://github.com/Azbito')} />
          <h3>GitHub</h3>
        </button>
      </div>
    </div>
  )
}