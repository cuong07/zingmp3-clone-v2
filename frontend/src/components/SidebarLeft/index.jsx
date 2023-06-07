import React, { useState } from 'react'
import { navbarMenu } from '../../utils/SidebarLeftItem'
import './styles.css'
import logo from '../../assets/logo.svg'
import logoIcon from '../../assets/mp3logo.svg'


const index = () => {
    return (
        <div className='sm:flex flex-col h-full w-full hidden '>

            <div className='z-20 w-full  py-2 md:block hidden bg-glass'>
                <img src={logo} alt="Logo" className='w-2/3 mx-auto' />
            </div>
            <div className='z-20 w-full mx-auto py-2 sm:block md:hidden hidden bg-glass'>
                <img src={logoIcon} alt="Logo" className='w-2/3 mx-auto' />
            </div>
            <nav className='w-full h-full'>
                <ul className='flex-col h-full sm:flex hidden bg-glass'>
                    {navbarMenu.map(item => (
                        <li key={item.title} className='flex px-2 py-2 items-center md:justify-start min-w-[58px] justify-center cursor-pointer hover:text-fuchsia-300 gap-2'>
                            <span className='text-2xl'>
                                {item.icon}
                            </span>
                            <span className='md:block hidden'>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    )
}

export default index;