import React from 'react'
import styles from '@/styles/Nav.module.scss'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Sunsaju
          </Link>
        </li>
      </ul>
      <div className={styles.menuIcon}>
        <FaBars />
      </div>
    </nav>
  )
}

export default Nav
