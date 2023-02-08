import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import { animateScroll as scroll } from 'react-scroll'
import Modal from '../Modal'

export default function NavBar() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  function scrollBack() {
    if (router.pathname == "/") {
      scroll.scrollToTop()
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.logo} onClick={scrollBack}>
          <strong>League Habilities</strong>
        </div>
        <div className={styles.item}>
          <p className={styles.link} onClick={scrollBack}>Home</p>
          <p className={styles.link} onClick={() => router.push('/about')}>About</p>
          <p className={styles.link} onClick={() => setShowModal(true)}>Contact</p>
        </div>
      </div>
      <Modal isOpen={showModal} setIsOpen={setShowModal} />
    </>
  )
}
