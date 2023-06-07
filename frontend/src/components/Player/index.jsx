import React, { useRef } from 'react'
import icons from '../../utils/icons'

import img from '../../assets/modalThemes/modalTheme2/theme2.jpg'

const {
    HiOutlineDotsHorizontal,
    AiFillHeart,
    MdOutlineSkipNext,
    MdOutlineSkipPrevious,
    MdPlayArrow,
    MdPause,
    BsShuffle,
    BsRepeat,
    BsMic,
    BsFillVolumeOffFill,
    BsFillVolumeUpFill,
    BsMusicNoteList,
    FaRegWindowRestore } = icons;

const index = ({ setToggleSidebar, toggleSidebar }) => {

    const thumbRef = useRef();
    const trackRef = useRef();
    const volumeRef = useRef();

    const handlerChangeVolume = () => {
        // volume = volumeRef.current.value;
        // audio.volume = volume / 100;
    };
    const handlerClickProgressbar = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect();
        const percent =
            Math.round(
                ((e.clientX - trackRect.left) * 10000) / trackRect.width
            ) / 100;
        thumbRef.current.style.cssText = `right: ${100 - percent}%`;
        // audio.currentTime = (percent * duration) / 100;
        // setTimeCur(Math.round((percent * duration) / 100));
        // dispatch(musicSlide.actions.setIsPlaying(true));
    };
    return (
        <div className='h-[90px] sm:px-5 px-2 flex items-center z-30 min-w-max bg-player'>
            <div className='flex gap-4 flex-auto h-[64px]'>
                <div className='flex gap-3 items-center'>
                    <img src={img} alt="thumbnail" className='sm:w-16 sm:h-16 w-14 h-14 object-cover rounded-full' />
                    <span className='sm:block hidden'>
                        <h3 className='sm:text-sm md:text-md'>Yêu anh em nhé</h3>
                        <p className='sm:text-sm md:text-md'>HuyR, Tùng Viu</p>
                    </span>
                </div>
                <span className=' items-center gap-3 sm:flex hidden'>
                    <HiOutlineDotsHorizontal className='' />
                    <AiFillHeart />
                </span>
            </div>
            <div className='flex-auto h-[64px] flex flex-col gap-1 '>
                <div className='flex gap-3 justify-center items-center'>
                    <BsShuffle />
                    <MdOutlineSkipPrevious className='sm:text-[24px] text-[20px]' />
                    <span className='p-1 border rounded-full'>
                        <MdPause className='sm:text-[30px] text-[22px]' />
                    </span>
                    <MdOutlineSkipNext className='sm:text-[24px] text-[20px]' />
                    <BsRepeat />
                </div>
                <div>
                    <div className="w-full flex justify-center items-center gap-3 text-xs ">
                        <span className="sm:text-sm text-xs">
                            00:00
                        </span>
                        <div
                            className="w-3/4 h-[3px] relative bg-white rounded-full cursor-pointer hover:h-2"
                            onClick={handlerClickProgressbar}
                            ref={trackRef}
                        >
                            <div
                                ref={thumbRef}
                                className="absolute h-full left-0 top-0 bg-main-500 rounded-full"
                            ></div>
                        </div>
                        <span className="sm:text-sm text-xs">
                            00:00
                        </span>
                    </div>
                </div>
            </div>
            <div className="640:w-[30%] w-1/5 flex-auto text-white flex justify-center sm:gap-5 gap-2 items-center h-[64px]">
                <span className=" gap-5 sm:flex hidden ">
                    <BsMic size={20} />
                </span>
                <span className="flex gap-5 items-center">
                    <span className='sm:text-[24px] text-[20px]'>
                        <BsFillVolumeOffFill />
                        {/* {audio.volume === 0 ? (
                            <BsFillVolumeOffFill />
                        ) : (
                            <BsFillVolumeUpFill />
                        )} */}
                    </span>
                    <input
                        ref={volumeRef}
                        type="range"
                        step="1"
                        max="100"
                        min="0"
                        className="bg-[#ccc] slider sm:block hidden "
                        onChange={handlerChangeVolume}
                    />
                </span>
                <span
                    className="cursor-pointer"
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                >
                    <BsMusicNoteList size={20} />
                </span>
            </div>
        </div>
    )
}

export default index