import React from 'react'
import SidebarLeft from '../components/SidebarLeft'
import Home from '../page/Home'
import { Player } from '../components'

const Public = () => {
    return (
        <div className='relative h-screen w-full'>
            <div className='flex h-full '>
                <div className='w-[200px] border border-slate-600'>
                    <SidebarLeft />
                </div>
                <div className='w-full'>
                    <Home />
                </div>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Player />
            </div>
        </div>
    )
}

export default Public