import React from 'react'
import styles from './Entry.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { diaryDataActions } from '../../store/diaryData-slice';
import EditEntry from './EditEntry';
import { editdisplayActions } from '../../store/editdisplay-slice';

function Entry(props) {

    const dispatch = useDispatch();
    const showEditComponent = useSelector(state => state.editdisplay.show);

    const deleteHandler = () => {
        dispatch(diaryDataActions.deleteData(props.item.id));
    }

    const editHandler = () => {
      dispatch(editdisplayActions.toggle());
    }

  return (
    <div>
      {!showEditComponent && 
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
      }

    </div>
  )
}

export default Entry