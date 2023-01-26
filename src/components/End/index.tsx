import Image from "next/image";
import { useRouter } from "next/router";
import styles from './end.module.scss'

export default function End() {

  const router = useRouter()

  return (
    <div className={styles.end}>
      <div className={styles.socialmedialogos}>
        <Image className={styles.facebook} src="/images/facebook.png" alt="facebook" width={30} height={30} onClick={() => router.push('https://www.facebook.com')} />
        <Image className={styles.instagram} src="/images/instagram.png" alt="instagram" width={30} height={30}
          onClick={() => router.push('https://www.instagram.com')} />
        <Image className={styles.discord} src="/images/discord.png" alt="discord" width={32} height={32}
          onClick={() => router.push('https://www.discord.com')}
        />
        <Image className={styles.github} src="/images/github.png" alt="github" width={30} height={30}
          onClick={() => router.push('https://github.com/Azbito')} />
      </div>
      <p className={styles.disclaimer}>All rights of League of Legends belongs to Riot Games. This website is not for commercial purpose.</p>
    </div>
  )
}