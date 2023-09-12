import React from 'react'
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerContent}>Home</div>
        <div className={styles.headerContent}>Add entry</div>
        <div className={styles.headerContent}>My entries</div>
        <div className={styles.headerContent}>Contact</div>
    </div>
  )
}

export default Header