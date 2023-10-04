import React from 'react'
import styles from './DiaryEntries.module.css'
import { useSelector } from 'react-redux';

import Entry from './Entry';

function DiaryEntries() {

    const Diary_Data = useSelector(state => state.diaryData.data);
    if(Diary_Data.s)

  return (
    <div className={styles.block}>
        {Diary_Data.map((item) => (
            <Entry 
                key={item.id} 
                item={{ id: item.id, title: item.title, content:item.content, date: item.date }}
            />
        ))}
    </div>
  )
}

export default DiaryEntries