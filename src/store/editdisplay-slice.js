import { createSlice } from '@reduxjs/toolkit';

const editdisplaySlice = createSlice({
    name : 'editdisplay',
    initialState : {show : false},
    reducers : {
        toggle(state){
            state.show = !state.show;
        }
    }, 
})



export const editdisplayActions = editdisplaySlice.actions;
export default editdisplaySlice;