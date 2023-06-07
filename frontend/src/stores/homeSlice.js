import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: {
        isFetching: false,
        error: false,
        success: false,
        data: {
            banner: {},
            newRelease: {},
            hEditorTheme: {}
        }
    },

}

const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        getHomeDataSuccess: (state, action) => {
            state.home.isFetching = false;
            // state.home.data = action.payload;
            state.home.data.banner = action.payload.items.find((item) => {
                return item.sectionId === "hSlider";
            });
            state.home.data.newRelease = action.payload.items.find((item) => {
                return item.sectionType === "new-release";
            })
            state.home.data.hEditorTheme = action.payload.items.find((item) => {
                return item.sectionId === "hEditorTheme";
            });
        },
        getHomeDataError: (state) => {
            state.home.isFetching = false
            state.home.error = true;
        },
        getHomeDataStart: (state) => {
            state.home.isFetching = true;
        }
    }
})


export default homeSlice;