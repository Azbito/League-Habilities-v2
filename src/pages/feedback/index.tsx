import Button from '@/components/Button'
import TextArea from '@/components/TextArea'
import styles from '../../styles/feedback.module.scss'

export default function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Say your opinion about our site, a suggestion or even a bug report!</h1>
        <TextArea height="20rem" />
        <Button margin="2rem 0 0 0" padding=".8rem" isBlue title='Send'
          onClick={() => alert("Sent")}
        />
      </div>
    </div>
  )
}