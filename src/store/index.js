import { configureStore } from "@reduxjs/toolkit";
import entrydisplaySlice from "./entrydisplay-slice";
import diaryDataSlice from "./diaryData-slice";
import editdisplaySlice from "./editdisplay-slice";

const store = configureStore({
    reducer : {
        entrydisplay : entrydisplaySlice.reducer,
        diaryData : diaryDataSlice.reducer,
        editdisplay : editdisplaySlice.reducer,
    }
});

export default store;

