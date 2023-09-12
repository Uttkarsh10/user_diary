// import React, { Fragment } from 'react'
import styles from './Main.module.css';
import Header from '../Layout/Header'
import diaryImage from '../../Images/diary-1.jpg'

function Main() {
  return (
    <div style={{backgroundImage : `url(${diaryImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} className={styles.main}>
        <Header/>
        <div>My Diary</div>
        <div className={styles['main-subtext']}>Organize your thoughts or record daily events anytime and anywhere!<br/>
              Beacuse Life is better with journals
        </div>
        <a href='#!'>Get Started</a>
    </div>
  )
}

export default Main