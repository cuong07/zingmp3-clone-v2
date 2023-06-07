import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlist: {
        isFetching: false,
        error: false,
        playlistData: {}
    }
}

const playlistSlice = createSlice({
    name: "playlist",
    initialState: initialState,
    reducers: {
        getPlaylistStart: (state) => {
            state.playlist.isFetching = true;
        },
        getPlaylistSucces: (state, action) => {
            state.playlist.isFetching = false;
            state.playlist.playlistData = action.payload;
        },
        getPlaylistError: (state) => {
            state.playlist.isFetching = false;
            state.playlist.error = true;
        }

    }
})

export default playlistSlice;