import React from 'react'
import styles from './blockquote.module.css'

export default ({children}) => (
  <blockquote className={styles.blockquote}>{children}</blockquote>
)