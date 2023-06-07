import { configureStore } from "@reduxjs/toolkit";
import backgroundSlice from "./backgrounSlice";
import homeSlice from "./homeSlice";
import playlistSlice from "./playlistSlice";


const store = configureStore({
    reducer: {
        background: backgroundSlice.reducer,
        homeData: homeSlice.reducer,
        playlist: playlistSlice.reducer
    }
})


export default store;