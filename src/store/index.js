import { configureStore } from "@reduxjs/toolkit";
import entrydisplaySlice from "./entrydisplay-slice";

const store = configureStore({
    reducer : {
        entrydisplay : entrydisplaySlice.reducer
    }
});

export default store;

