import React, { useRef, useState} from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
// import { useSelector } from 'react-redux';
import DiaryEntries from './DiaryEntries'
import { useDispatch, useSelector} from 'react-redux';
import { diaryDataActions } from '../../store/diaryData-slice';

function DiaryEntry() {

  const [state1,setState] = useState(true);
  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector(state => state.diaryData.data);

  const clickHandler = () => {
    setState(!state1);
  }

  const saveHandler = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = new Date();
    const id = Math.random();

    const newEntry = {id:id, title : title, content : content, date : date.toDateString()};
    dispatch(diaryDataActions.addData(newEntry));
    setState(!state1);
  }


  
  return (
        <div>
        {state1 && 
          
          <Modal>
              <div className={styles.title}>Title:</div>
              <input type='text' placeholder='Add Title here' size='50.5' ref={titleRef} className={styles.input}/>
              <div className={styles.content}>Content:</div>
              <textarea type='text' rows='15' cols='47' placeholder='Add Content here' ref={contentRef} className={styles.input} style={{padding:'10px'}}/>
              <div className={styles.text}>
                  <div style={{marginRight:'15px',fontSize:'20px'}} onClick = {saveHandler}>
                    Save
                  </div>
                  <div style={{fontSize:'20px'}} onClick = {clickHandler}>
                    Cancel
                  </div>
              </div>
          </Modal>
        }

        {!state1 && data.length ===0 && <p style={{color:"white", fontSize:'20px'}}>You have no entries....</p>}
  
        {/* {!state1 && <p>You have no entries....</p>}  */}
        {!state1 && <DiaryEntries/>}
        </div>

  )
}

export default DiaryEntry