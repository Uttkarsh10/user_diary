import { createSlice } from '@reduxjs/toolkit';

const editdisplaySlice = createSlice({
    name : 'editdisplay',
    initialState : {show : false, id : 0},
    reducers : {
        toggle(state){
            state.show = !state.show;
        },

        setId(state, action){
            const id = action.payload;
            state.id = id;
        }
    }, 
})



export const editdisplayActions = editdisplaySlice.actions;
export default editdisplaySlice;