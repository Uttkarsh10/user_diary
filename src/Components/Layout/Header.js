import React from 'react'
import styles from './Header.module.css';
// import DiaryEntry from '../Diary/DiaryEntry';
import {useDispatch} from 'react-redux';
import { entrydisplayActions } from '../../store/entrydisplay-slice';

function Header(props) {
  const dispatch = useDispatch();

  const addEvent = () => {
    dispatch(entrydisplayActions.toggle());
  }
  
  return (
    <div>
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