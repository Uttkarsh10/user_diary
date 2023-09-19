import { createSlice } from '@reduxjs/toolkit';

const entrydisplaySlice = createSlice({
    name : 'entrydisplay',
    initialState : {show : false},
    reducers : {
        toggle(state){
            state.show = !state.show;
        }
    },
})


  
export const entrydisplayActions = entrydisplaySlice.actions;
  
export default entrydisplaySlice;