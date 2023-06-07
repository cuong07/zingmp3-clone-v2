import React from 'react'
import background from '../../assets/backroundThemes/backroundThemes'
import { useDispatch } from 'react-redux'
import backgroundSlice from '../../stores/backgrounSlice';
import icons from '../../utils/icons';

const { AiOutlineClose } = icons

const index = ({ setIsShowMenuBackground }) => {

    const dispatch = useDispatch();
    const handlerChangeBackground = (path) => {
        dispatch(backgroundSlice.actions.setBackground(path))
    }

    return (
        <div className='min-w-min min-h-min bg-modal p-5 animate-slide-left '>
            <div className='flex flex-col px-2'>
                <div className='flex justify-between'>
                    <h3>Chủ đề</h3>
                    <span className=''
                        onClick={() => setIsShowMenuBackground(prev => !prev)}
                    >
                        <AiOutlineClose />
                    </span>
                </div>
                <div className='flex flex-wrap container'>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 py-2">
                        {background.map(bg => (
                            <div
                                key={bg.id}
                                className='overflow-hidden rounded-md w-full'
                                onClick={() => handlerChangeBackground(bg.path)}
                            >
                                <img src={bg.path} alt="background" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index;