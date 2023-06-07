import React, { useState } from 'react'
import SidebarLeft from '../components/SidebarLeft'
import Home from '../page/Home'
import { Header, Player, SidebarRight } from '../components'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import icons from '../utils/icons'
import SidebarLeftMobile from "../components/SidebarLeft/SidebarLeftMobile"

const { VscListSelection } = icons

const Public = () => {

    const [toggleSidebar, setToggleSidebar] = useState(true);

    const { backgroundPath } = useSelector(state => state.background)
    const [isShowNavMobile, setIsShowNavMobile] = useState(false)

    return (
        <>
            <div className='relative h-screen w-full'>
                {/* Background */}
                <div className='absolute w-full h-full overflow-hidden'>
                    <div className='bg-cover' style={{ backgroundImage: `url(${backgroundPath})`, width: '100%', height: '100%' }}></div>
                </div>
                {/* Main */}
                <div className='flex w-full h-full relative'>
                    <VscListSelection
                        className='max-sm:block text-xl hidden z-50 my-5 mx-2 absolute'
                        onClick={() => setIsShowNavMobile(!isShowNavMobile)}
                    />
                    {/* Sidebar left */}
                    {!isShowNavMobile &&
                        <div className='md:min-w-[200px] sm:w-16 shadow-md mb-[90px] animate-slide-right '>
                            <SidebarLeft />
                        </div>
                    }
                    {isShowNavMobile &&
                        <div className='w-full absolute flex h-full z-40'>
                            <SidebarLeftMobile setIsShowNavMobile={setIsShowNavMobile} />
                            <div className='flex-auto'
                                onClick={() => setIsShowNavMobile(prev => !prev)}
                            />
                        </div>
                    }

                    {/* Home */}
                    <div className='flex-auto'>
                        <Header />
                        <Outlet />
                    </div>
                    {/* Sidebar Right */}
                    {
                        toggleSidebar &&
                        <div className="md:relative md:min-w-[350px] w-[300px] md:block absolute z-30 top-0 right-0 bottom-0 mb-[90px] animate-slide-left">
                            <SidebarRight />
                        </div>
                    }
                </div>

                {/* Player */}
                <div className='absolute bottom-0 w-full'>
                    <Player setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </>

    )
}

export default Public