import React from 'react'
import icons from '../../utils/icons'
const { AiOutlineSearch } = icons;


const Search = () => {
    return (
        <div className='h-10 flex gap-3 items-center rounded-full border border-gray-700 w-[400px] px-2'>
            <span className='flex items-center justify-center'>
                <AiOutlineSearch className='text-2xl' />
            </span>
            <input type="text" placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...' className='h-full w-full rounded-r-full bg-transparent focus:outline-none' />
        </div>

    )
}

export default Search