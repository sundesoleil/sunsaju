import React from 'react'
import styles from '@/styles/Nav.module.scss'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Sunsaju
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/horoscope" className={styles.navLink}></Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/readings" className={styles.navLink}></Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  )
}

export default Nav
