import styles from './emotes.module.scss'

type EmotesProps = {
  emote1: string,
  emote2: string,
  emote3: string,
  emote4: string,
  emotetitle1: string,
  emotetitle2: string,
  emotetitle3: string,
  emotetitle4: string
}

export default function Emotes({ emote1, emote2, emote3, emote4, emotetitle1, emotetitle2, emotetitle3, emotetitle4 }: EmotesProps) {
  return (
    <div>
      <p className={styles.boxtitle}>Emotes</p>
      <div className={styles.emotes}>
        <img src={emote1} alt="emote" />
        <img src={emote2} alt="emote" />
        <img src={emote3} alt="emote" />
        <img src={emote4} alt="emote" />
      </div>
      <div className={styles.titles}>
        <p className={styles.firsttitle}>{emotetitle1}</p>
        <p className={styles.secondtitle}>{emotetitle2}</p>
        <p className={styles.thirdtitle}>{emotetitle3}</p>
        <p className={styles.fourthtitle}>{emotetitle4}</p>
      </div>

    </div>

  )
}