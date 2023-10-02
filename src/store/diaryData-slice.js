import { createSlice } from "@reduxjs/toolkit";

const diaryDataSlice = createSlice({
    name : 'diaryData',
    initialState : {data : []},
    reducers : {
        addData(state,entry){
            state.data = state.data.push(entry);
        },

        deleteData(state,id){
            state.data = state.data.filter((item) => item.id!==id);
        }
    },
})

export const diaryDataActions = diaryDataSlice.actions;

export default diaryDataSlice;



