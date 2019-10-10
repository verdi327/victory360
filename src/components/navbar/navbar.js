import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'gatsby'

export default () => (
  <nav className={styles.navbar}>
    <Link className={styles.logo} to='/'>Victory360</Link>
  </nav>
)