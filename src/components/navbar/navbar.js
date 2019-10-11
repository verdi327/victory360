import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'gatsby'

export default () => (
  <nav className={styles.navbar}>
    <Link className={styles.logo} to='/'>Victory360</Link>
    <ul>
      <li className={styles.navLink}><Link to='/about'>About</Link></li>
      <li className={styles.navLink}><Link to='/services'>Services</Link></li>
      <li className={styles.navLink}><Link to='/team'>Team</Link></li>
    </ul>
  </nav>
)