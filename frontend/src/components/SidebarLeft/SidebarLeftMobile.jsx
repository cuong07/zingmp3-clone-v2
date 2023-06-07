import React from 'react'
import { navbarMenu } from '../../utils/SidebarLeftItem'

const SidebarLeftMobile = ({ setIsShowNavMobile }) => {
    return (
        <ul className='flex-col flex justify-start bg-glass h-full w-4/5 pl-5 bg-glass top-0 bottom-0 left-0 pt-20 animate-slide-right'>
            {navbarMenu.map(item => (
                <li key={item.title} className='flex px-2 py-2 items-center md:justify-normal w-full cursor-pointer hover:text-fuchsia-300 gap-2'
                    onClick={() => setIsShowNavMobile(prev => !prev)}
                >
                    <span className='text-2xl'>
                        {item.icon}
                    </span>
                    <span className=''>{item.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default SidebarLeftMobile