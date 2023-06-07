import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getDetailPlaylist } from '../lib/getDetailPlaylist';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Playlist = () => {
    const { title, playlistiId } = useParams();
    const dispatch = useDispatch();
    const { playlistData } = useSelector((state) => state.playlist.playlist)

    console.log(playlistData);
    useEffect(() => {
        const fetchPlaylistData = async () => {
            const response = await getDetailPlaylist(dispatch, playlistiId)
        }
        fetchPlaylistData();
    }, [])

    return (
        <div className='w-full flex sm:px-5 px-2 mt-6 max-sm:flex-col gap-4'>
            <div className='sm:w-[300px] flex sm:flex-col sm:gap-4 gap-2 '>
                <div className="sm:w-full relative flex">
                    <img
                        className='sm:w-full max-w-[130px] object-contain rounded-md'
                        src={playlistData?.thumbnailM}
                        alt="thumbnail"
                    />
                    <div className=' sm:w-full w-[130px] absolute left-0 top-0 h-full hover:bg-overlay-30  duration-300 flex items-center justify-center'>
                    </div>
                </div>
                <div className='flex flex-col sm:items-center items-start'>
                    <h2 className='sm:text-lg font-bold '>{playlistData?.title}</h2>
                    <span className='text-xs opacity-80'>Câp nhật: {moment(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}</span>
                    <span className="sm:text-center">
                        {playlistData?.artists?.map((item) => (
                            <Link
                                key={item.id}
                                className="sm:text-md text-xs hover:underline"
                            >
                                {item.name} ,
                            </Link>
                        ))}
                    </span>
                    <span className="text-main-text text-[12px]">
                        {`${Math.round(playlistData?.like / 1000)}K Lượt yêu thích`}
                    </span>
                </div>
            </div>
            <div className='border flex-auto'>

            </div>
        </div>
    )
}

export default Playlist