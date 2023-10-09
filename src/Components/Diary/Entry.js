import React from 'react'
import styles from './Entry.module.css'
import { useDispatch } from 'react-redux'
import { diaryDataActions } from '../../store/diaryData-slice';

function Entry(props) {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(diaryDataActions.deleteData(props.item.id));
    }

    const editHandler = () => {
      dispatch(diaryDataActions.editData(props.item.id));
      console.log("Edit Handler")
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