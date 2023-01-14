import { useRouter } from 'next/router'
import React from 'react'
import styles from "./navbar.module.scss"
import { animateScroll as scroll } from 'react-scroll'

export default function NavBar() {
  const router = useRouter()

  function scrollBack() {
    if (router.pathname == "/") {
      scroll.scrollToTop()
    } else {
      router.push('/')
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.logo} onClick={scrollBack}>
        <strong>League Habilities</strong>
      </div>
      <div className={styles.item}>
        <p className={styles.link} onClick={() => alert("Work in progress")}>Menu</p>
        <p className={styles.link} onClick={() => alert("Work in progress")}>Home</p>
        <p className={styles.link} onClick={() => alert("Work in progress")}>About</p>
        <p className={styles.link} onClick={() => alert("Work in progress")}>Contact</p>
      </div>
    </div>
  )
}
