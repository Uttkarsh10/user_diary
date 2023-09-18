import React from 'react'
import styles from './DiaryEntries.module.css'

const dummy_Data = [
    {
        title : "Title 1",
        content : "I woke up at 6 oclock in the morning. We had breakfast and dressed up. Today we all went to Fantasize Amusement park near Pune.",
        date : new Date()
    },

    {
        title : "Title 2",
        content : "Today I went to Bangalore railway station, Yeshwantpura, to receive my uncle and aunt who were coming from Mumbai. It was a bright sunny day. Sun was shining like a star. While I and my father were crossing the Orion mall, we saw three elephants that made me reminded of my Kerala trip.",
        date : new Date()
    },

    {
        title : "Title 3",
        content : "Content 3",
        date : new Date()
    }
]

function DiaryEntries() {
  return (
    <div className={styles.block}>
        {dummy_Data.map((item) => (
            <div className={styles.EntryBlock}>
                <div className={styles.date}>{item.date.toDateString()}</div>
                <hr style={{width:'850px'}}/>
                <div style={{textAlign:"left", marginLeft:"25px"}}>{item.title}</div>
                <div style={{textAlign:"left", marginLeft:"25px"}}>{item.content}</div>

                <div className={styles.blockButton}>
                    <div style={{marginRight:'10px'}}>Edit</div>
                    <div>Delete</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DiaryEntries