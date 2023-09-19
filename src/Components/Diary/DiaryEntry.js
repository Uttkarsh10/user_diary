import React, { useState } from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
// import DiaryEntries from './DiaryEntries'

function DiaryEntry() {
  const [state1,setState] = useState(true);

  const clickHandler = () => {
    setState(!state1);
  }


  return (
    <div>
      {state1 && 
        <Modal>
            <div className={styles.title}>Title:</div>
            <input type='text' placeholder='Add Title here' size='50.5' className={styles.input}/>
            <div className={styles.content}>Content:</div>
            <textarea type='text' rows='15' cols='47' placeholder='Add Content here' className={styles.input} style={{padding:'10px'}}/>
            <div className={styles.text}>
                <div style={{marginRight:'15px',fontSize:'20px'}}>
                  Save
                </div>
                <div style={{fontSize:'20px'}} onClick = {clickHandler}>
                  Cancel
                </div>
            </div>
        </Modal>}

        {!state1 && <p>You have no entries....</p>} 
    </div>
  )
}

export default DiaryEntry