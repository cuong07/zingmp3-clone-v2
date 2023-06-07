import request from "../../axios"
import playlistSlice from "../stores/playlistSlice"


export const getDetailPlaylist = async (dispatch, playlistId) => {
    dispatch(playlistSlice.actions.getPlaylistStart())
    try {
        const response = await request.get("/detailplaylist", {
            params: {
                id: playlistId
            }
        })
        dispatch(playlistSlice.actions.getPlaylistSucces(response.data.data))
        return response.data.data
    } catch (error) {
        dispatch(playlistSlice.actions.getPlaylistError())
        console.log(error);
    }
}