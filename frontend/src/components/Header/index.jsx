import React from 'react'
import Search from './Search'
import icons from '../../utils/icons'
import { BackgroundSetter } from '..';
const { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight, AiFillSetting } = icons;
const index = () => {
    return (
        <div className='h-[59px] flex items-center px-4 justify-between w-full'>
            <div className='flex gap-2'>
                <span className='flex gap-3 items-center'>
                    <HiOutlineArrowNarrowLeft size={26} />
                    <HiOutlineArrowNarrowRight size={26} />
                </span>
                <Search />
            </div>
            <div>
                <AiFillSetting />
                <div className='overflow-scroll hidden'>
                    <BackgroundSetter />
                </div>
            </div>
        </div>
    )
}

export default index