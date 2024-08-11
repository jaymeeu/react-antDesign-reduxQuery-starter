import { useTheme } from '@/contexts/ThemeContext'
import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { IoMdSunny } from 'react-icons/io'

const ToggleBtn = () => {
    const { toggleMode } = useTheme()

    return (
        <div className=' fixed z-50 bottom-8 right-8 shadow-2xl'>
            <div onClick={toggleMode} className='flex py-3 p-4 bg-gray-700 dark:bg-gray-100 rounded-xl cursor-pointer' >
                <IoMdSunny className="hidden dark:block text-gray-700 text-xl" />
                <BsFillMoonStarsFill className="block dark:hidden text-gray-100 text-xl" />
            </div>
        </div>
    )
}

export default ToggleBtn
