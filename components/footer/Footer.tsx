import React from 'react'
import styles from '@/styles/Footer.module.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>
        {' '}
        &copy; {currentYear} SunSaju. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
