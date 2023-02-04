import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import TextArea from '@/components/TextArea'
import styles from '../../styles/feedback.module.scss'

export default function Feedback() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Say your opinion about our site, a suggestion or even a bug report!</h1>
          <TextArea height="20rem" />
          <Input placeholder="Type your first name" width="20rem" />
          <Input placeholder='Type your email' width="20rem" />

          <Button margin="2rem 0 2rem 0" padding=".8rem" isBlue title='Send'
            onClick={() => alert("Sent")}
          />
        </div>
        <div className={styles.disclaimer}>
          <p>Don't share your private data. We will reply as soon as possible.</p>
        </div>
      </div>
    </>
  )
}