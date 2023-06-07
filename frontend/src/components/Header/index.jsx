import React, { useState } from 'react'
import Search from './Search'
import icons from '../../utils/icons'
import { BackgroundSetter } from '..';
const { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight, AiFillSetting } = icons;
const index = () => {

    const [isShowMenuBackGround, setIsShowMenuBackground] = useState(false);


    return (
        <div className='h-[59px] flex items-center sm:px-4 justify-between w-full px-10'>
            <div className='flex gap-2'>
                <span className='md:flex gap-3 items-center hidden'>
                    <HiOutlineArrowNarrowLeft size={26} />
                    <HiOutlineArrowNarrowRight size={26} />
                </span>
                <Search />
            </div>
            <div className=''>
                <AiFillSetting onClick={() => setIsShowMenuBackground(!isShowMenuBackGround)} />
                {
                    isShowMenuBackGround && (<div>
                        <div className='absolute w-4/5 sm:w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 z-50'>
                            <BackgroundSetter isShow={isShowMenuBackGround} setIsShowMenuBackground={setIsShowMenuBackground} />
                        </div>
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-40'
                            onClick={() => setIsShowMenuBackground(!isShowMenuBackGround)}
                        ></div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default index