import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    backgroundPath: '/src/assets/backroundThemes/1.jpg',
}

const backgroundSlice = createSlice({
    name: 'background',
    initialState: initialState,
    reducers: {
        setBackground: (state, action) => {
            state.backgroundPath = action.payload;
        }
    }
})

export default backgroundSlice;