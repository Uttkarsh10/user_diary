import React from 'react'
import styles from './Main.module.css';
import Header from '../Layout/Header'
import diaryImage from '../../Images/diary-1.jpg'

function Main() {
  return (
    <div style={{backgroundImage : `url(${diaryImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} className={styles.main}>
        <Header/>
        <div className={styles['main-text']}>My Diary</div>
        <div className={styles['main-subtext']}>Organize your thoughts or record daily events!<br/>
              <span style={{position:"relative", right:"48px"}}>Beacuse Life is better with journals</span>
        </div>
        <div className={styles['main-link']}>Get Started</div>
    </div>
  )
}

export default Main
