import { configureStore } from "@reduxjs/toolkit";
import backgroundSlice from "./backgrounSlice";


const store = configureStore({
    reducer: {
        background: backgroundSlice.reducer
    }
})


export default store;