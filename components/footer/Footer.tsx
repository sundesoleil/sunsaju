import React from 'react'
import styles from '@/styles/Footer.module.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <span className={styles.footer__copyright}>
        &copy; {currentYear} SunSaju. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
