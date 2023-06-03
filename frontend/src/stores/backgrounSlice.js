import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    backgroundPath: '',
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