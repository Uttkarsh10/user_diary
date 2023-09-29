import React from 'react'
import styles from './Header.module.css';
import DiaryEntry from '../Diary/DiaryEntry';
import {useDispatch, useSelector } from 'react-redux';
import { entrydisplayActions } from '../../store/entrydisplay-slice';

function Header(props) {
  //  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  const showEntry = useSelector(state => state.entrydisplay.show);

  const addEvent = () => {
    dispatch(entrydisplayActions.toggle());
    // props.change();
    // setData(!data);
  }

  console.log(showEntry);
  return (
    <div>
      {showEntry && <DiaryEntry/>}
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