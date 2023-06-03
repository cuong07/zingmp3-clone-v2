import React from 'react'
import { navbarMenu } from '../../utils/SidebarLeftItem'
import './styles.css'

const index = () => {
    return (
        <div>
            <nav>
                <ul className='flex flex-col bg-glass '>
                    {navbarMenu.map(item => (
                        <li key={item.title} className='flex px-2 py-2 items-center cursor-pointer hover:text-fuchsia-300 gap-2'>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default index;