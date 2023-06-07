import request from '../../axios'
import homeSlice from '../stores/homeSlice';


export const getHomeData = async (dispatch) => {
    dispatch(homeSlice.actions.getHomeDataStart())
    try {
        const response = await request.get('/home');
        dispatch(homeSlice.actions.getHomeDataSuccess(response.data.data))
        return response.data.data;
    } catch (error) {
        console.log(error);
        dispatch(homeSlice.actions.getHomeDataError())
    }
}