import React, { useRef, useState} from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
// import { useSelector } from 'react-redux';
import DiaryEntries from './DiaryEntries'
import { useDispatch} from 'react-redux';
import { diaryDataActions } from '../../store/diaryData-slice';

function DiaryEntry(props) {

  const hasProp = 'item' in props;
  console.log(hasProp);

  const [state1,setState] = useState(true);

  const {title1, content1} = props.item;

  // const [editDate, setEditedDate] = useState(date1);
  const [editTitle, setEditedTitle] = useState(title1);
  const [editContent, setEditedContent] = useState(content1);

  const titleRef = useRef();
  const contentRef = useRef();
  const dispatch = useDispatch();

  const clickHandler = () => {
    setState(!state1);
  }

  const saveHandler = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const date = new Date();
    const id = Math.random();

    // const newEntry = {id:id, title : title, content : content, date: date};
    const newEntry = {id:id, title : title, content : content, date : date.toDateString()};
    dispatch(diaryDataActions.addData(newEntry));
    setState(!state1);
  }

  const changeHandler = (event) => {
    setEditedTitle(event.target.value);
    setEditedContent(event.target.value);
  }

  
  return (
    <div>
      {!hasProp && 
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
  
        {/* {!state1 && <p>You have no entries....</p>}  */}
        {!state1 && <DiaryEntries/>}
      </div>}


      {hasProp && 
         <div>
         {state1 && 
           
           <Modal>
               <div className={styles.title}>Title:</div>
               <input type='text' size='50.5' value={editTitle} className={styles.input} onChange={changeHandler}/>
               <div className={styles.content}>Content:</div>
               <textarea type='text' rows='15' cols='47' value={editContent} className={styles.input} onChange={changeHandler} style={{padding:'10px'}}/>
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
   
         {/* {!state1 && <p>You have no entries....</p>}  */}
         {!state1 && <DiaryEntries/>}
       </div>}
    </div>
  )
}

export default DiaryEntry