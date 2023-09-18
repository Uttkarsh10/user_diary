import React, { useState } from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
import DiaryEntries from './DiaryEntries'

function DiaryEntry() {
  const [state,setState] = useState(false);

  const clickHandler = () => {
    setState(!state);
  }

  return (
    <div>
      {!state && 
        <Modal>
            <div style={{marginBottom:'5px', fontSize:'20px'}}>Title:</div>
            <input type='text' placeholder='Add Title here' size='50.5' className={styles.input} style={{padding:'8px'}}/>
            <div style={{marginBottom:'5px', marginTop:'20px', fontSize:'20px'}}>Content:</div>
            <textarea type='text' rows='15' cols='47' placeholder='Add Content here' className={styles.input} style={{padding:'10px'}}/>
            {/* <input type='text' placeholder='Add Content here'/> */}
            <div className={styles.text}>
                <div style={{marginRight:'15px',fontSize:'20px'}} onClick = {clickHandler}>Save</div>
                <div style={{fontSize:'20px'}} onClick = {clickHandler}>Cancel</div>
            </div>
        </Modal>}

        {state && <DiaryEntries/>}
    </div>
  )
}

export default DiaryEntry