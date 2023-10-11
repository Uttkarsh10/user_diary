import React, { useState } from 'react'
import Modal from '../UI/Modal'
import styles from './DiaryEntry.module.css'
import { useDispatch } from 'react-redux';
import { diaryDataActions } from '../../store/diaryData-slice';
import DiaryEntries from './DiaryEntries';

function EditEntry(props) {

  console.log("Edit Entry");
  
  const dispatch = useDispatch();
  const [state1,setState] = useState(true);
  const id = props.item.id;
  const data = props.item.data;

  let ind = 0;
  for(let i=0;i<data.length;i++){
    if(data[i].id === id) ind = i;
  }
  
  const [title,setTitle] = useState(data[ind].title);
  const [content,setContent] = useState(data[ind].content);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const saveHandler = () => {
    dispatch(diaryDataActions.deleteData(id));
    const date = new Date();

    const newEntry = {id:id, title : title, content : content, date : date.toDateString()};
    dispatch(diaryDataActions.addData(newEntry));
    setState(!state1);
  }



  return (
    <div>
      {state1 && 
          <Modal>
          <div className={styles.title}>Title:</div>
          <input type='text'  size='50.5'  className={styles.input} value={title} onChange={titleChangeHandler}/>
          <div className={styles.content}>Content:</div>
          <textarea type='text' rows='15' cols='47' className={styles.input} value={content} onChange={contentChangeHandler} style={{padding:'10px'}}/>
          <div className={styles.text}>
              <div style={{marginRight:'15px',fontSize:'20px'}} onClick={saveHandler}>
                Save
              </div>
              <div style={{fontSize:'20px'}}>
                Cancel
              </div>
          </div>
        </Modal>}

        {!state1 && <DiaryEntries/>}
    </div>
    
  )
}

export default EditEntry