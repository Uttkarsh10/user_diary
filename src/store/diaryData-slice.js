import { createSlice } from "@reduxjs/toolkit";

const diaryDataSlice = createSlice({
    name : 'diaryData',
    initialState : {data : []},
    reducers : {
        addData(state,action){
            const newEntry = action.payload;
            state.data.push({
                id : newEntry.id,
                title : newEntry.title,
                content : newEntry.content, 
                date : newEntry.date
            });
        },

        deleteData(state,action){
            const id = action.payload;
            state.data = state.data.filter((item) => item.id!==id);
        },

        // editData(state,action){
        //     const id = action.payload;
        //     // <DiaryEntry item={{date: state.data.date, title: state.data[id].title, content: state.data[id].content}}/>
        //     <EditEntry/>

        // }
    },
})

export const diaryDataActions = diaryDataSlice.actions;

export default diaryDataSlice;



