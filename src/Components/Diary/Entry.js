import React from 'react'
import styles from './Entry.module.css'
import { useDispatch } from 'react-redux'
import { diaryDataActions } from '../../store/diaryData-slice';
import { editdisplayActions } from '../../store/editdisplay-slice';

function Entry(props) {

  console.log("Entry");

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(diaryDataActions.deleteData(props.item.id));
    }

    const editHandler = () => {
      dispatch(editdisplayActions.toggle());
      dispatch(editdisplayActions.setId(props.item.id));
    }

  return (
    <div className={styles.EntryBlock}>
        <div className={styles.date}>{props.item.date}</div>
        <hr style={{width:'850px'}}/>
        <div style={{textAlign:"left", marginLeft:"25px"}}>{props.item.title}</div>
        <div style={{textAlign:"left", marginLeft:"25px"}}>{props.item.content}</div>

        <div className={styles.blockButton}>
            <div style={{marginRight:'10px'}} onClick={editHandler}>Edit</div>
            <div onClick={deleteHandler}>Delete</div>
        </div>
    </div>
  )
}

export default Entry