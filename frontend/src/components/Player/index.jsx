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

const index = () => {

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
        <div className='h-[90px] px-5 flex items-center border'>
            <div className='flex gap-4 flex-auto h-[64px]'>
                <div className='flex gap-3'>
                    <div className='w-16 h-16 object-contain border flex justify-center items-center'>
                        <img src={img} alt="thumbnail" className='' />
                    </div>
                    <span>
                        <h3>Yêu anh em nhé</h3>
                        <p>HuyR, Tùng Viu</p>
                    </span>
                </div>
                <span className='flex items-center gap-3'>
                    <HiOutlineDotsHorizontal />
                    <AiFillHeart />
                </span>
            </div>
            <div className='flex-auto h-[64px] flex flex-col gap-1 '>
                <div className='flex gap-3 justify-center items-center'>
                    <BsShuffle />
                    <MdOutlineSkipPrevious size={24} />
                    <span className='p-1 border rounded-full'>
                        <MdPause size={30} />
                    </span>
                    <MdOutlineSkipNext size={24} />
                    <BsRepeat />
                </div>
                <div>
                    <div className="w-full flex justify-center items-center gap-3 text-xs ">
                        <span className="text-main-text">
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
                        <span className="text-main-text">
                            00:00
                        </span>
                    </div>
                </div>
            </div>
            <div className="640:w-[30%] w-1/5 flex-auto text-white flex justify-center gap-5 items-center h-[64px]">
                <span className="flex gap-5 max-1200:hidden">
                    <BsMic size={20} />
                    <FaRegWindowRestore size={20} />
                </span>
                <span className="flex gap-5 items-center">
                    <span>
                        <BsFillVolumeOffFill size={20} />
                        {/* {audio.volume === 0 ? (
                            <BsFillVolumeOffFill size={20} />
                        ) : (
                            <BsFillVolumeUpFill size={20} />
                        )} */}
                    </span>
                    <input
                        ref={volumeRef}
                        type="range"
                        step="1"
                        max="100"
                        min="0"
                        className="bg-[#ccc] slider max-640:hidden"
                        onChange={handlerChangeVolume}
                    />
                </span>
                <span
                    className="cursor-pointer"
                // onClick={handlerToggleSideBarRight}
                >
                    <BsMusicNoteList size={20} />
                </span>
            </div>
        </div>
    )
}

export default index