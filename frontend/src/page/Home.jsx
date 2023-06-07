import React, { useEffect } from 'react'
import { Header, Slider } from '../components'
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from "../lib/getHomeData"

const Home = () => {

    const dispatch = useDispatch();
    const banner = useSelector(state => state.homeData.home)
    console.log(banner);
    useEffect(() => {
        const fetchHomeData = async () => {
            const response = await getHomeData(dispatch);
            console.log(response);
        }
        fetchHomeData();
    }, [])

    return (
        <div className='w-full sm:block hidden '>
            <Slider />
        </div>
    )
}

export default Home