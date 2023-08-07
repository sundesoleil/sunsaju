'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/Nav.module.scss'
import Logo from '@/public/images/yin-yan-symbol.png'

const TopNavbar: React.FC = () => {
  const [show, handleShow] = useState(false)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`${styles.nav} ${show ? styles.nav__black : ''}`}>
      <div className={styles.nav__contents}>
        <img className={styles.nav__logo} src={Logo.src} alt="" />
        <div className={styles.nav__title}>선사주</div>
        <img className={styles.nav__avatar} src={Logo.src} alt="" />
      </div>
    </div>
  )
}

export default TopNavbar
