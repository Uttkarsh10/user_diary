import { configureStore } from "@reduxjs/toolkit";
import entrydisplaySlice from "./entrydisplay-slice";
import diaryDataSlice from "./diaryData-slice";

const store = configureStore({
    reducer : {
        entrydisplay : entrydisplaySlice.reducer,
        diaryData : diaryDataSlice.reducer
    }
});

export default store;

