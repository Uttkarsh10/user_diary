import React, { useState} from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
// import { useSelector } from 'react-redux';
import DiaryEntries from './DiaryEntries'

function DiaryEntry() {
  const [state1,setState] = useState(true);

  const clickHandler = () => {
    console.log("click handler = " + state1);
    setState(!state1);
  }

  console.log("state 1 = " + state1);


  return (
    <div>
      {state1 && 
        
        <Modal>
            <div className={styles.title}>Title:</div>
            <input type='text' placeholder='Add Title here' size='50.5' className={styles.input}/>
            <div className={styles.content}>Content:</div>
            <textarea type='text' rows='15' cols='47' placeholder='Add Content here' className={styles.input} style={{padding:'10px'}}/>
            <div className={styles.text}>
                <div style={{marginRight:'15px',fontSize:'20px'}} onClick = {clickHandler}>
                  Save
                </div>
                <div style={{fontSize:'20px'}} onClick = {clickHandler}>
                  Cancel
                </div>
            </div>
        </Modal>
      }

      {/* {!state1 && <p>You have no entries....</p>}  */}
      {!state1 && <DiaryEntries/>}
    </div>
  )
}

export default DiaryEntry