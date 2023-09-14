import React, { useState } from 'react'
import styles from './Header.module.css';
import DiaryEntry from '../Diary/DiaryEntry';

function Header(props) {
  const [data, setData] = useState(false);

  const addEvent = () => {
    setData(!data);
  }

  return (
    <div>
      {data && <DiaryEntry/>}
      <div className={styles.header}>
        <div className={styles.headerContent}>Home</div>
        <div className={styles.headerContent} onClick={addEvent}>Add entry</div>
        <div className={styles.headerContent}>My entries</div>
        <div className={styles.headerContent}>Contact</div>
      </div>
    </div>
  )
}

export default Header