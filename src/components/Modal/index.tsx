import styles from './modal.module.scss'
import ModalComponent from 'react-modal';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type ModalProps = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ isOpen, setIsOpen }: ModalProps) {

  const router = useRouter()

  return (
    <ModalComponent
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: "blur(.2rem)",
          transition: "2s"
        },
        content: {
          position: 'absolute',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: 'transparent',
          border: 'none',
          width: "35rem",
          height: "30rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }
      }}
      contentLabel="Example Modal"
    >
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>Contact Us!</h1>
          <p className={styles.description}>League Abilities' Team is always here for you. Follow us in all social media to get tuned in!</p>
        </div>
        <div className={styles.socialmedia}>
          <button className={styles.facebook}>
            <Image className={styles.facebookimage} src="/images/facebook.png" alt="facebook" width={30} height={30} onClick={() => router.push('https://www.facebook.com')} />
            <h3>Facebook</h3>
          </button>
          <button className={styles.instagram}>
            <Image className={styles.instagramimage} src="/images/instagram.png" alt="instagram" width={30} height={30}
              onClick={() => router.push('https://www.instagram.com')} />
            <h3>Instagram</h3>
          </button>
          <button className={styles.discord}>
            <Image className={styles.discordimage} src="/images/discord.png" alt="discord" width={32} height={32}
              onClick={() => router.push('https://www.discord.com')}
            />
            <h3>Discord</h3>
          </button>
          <button className={styles.github}>
            <Image className={styles.githubimage} src="/images/github.png" alt="github" width={30} height={30}
              onClick={() => router.push('https://github.com/Azbito')} />
            <h3>GitHub</h3>
          </button>
        </div>
      </div>
    </ModalComponent >
  )
}