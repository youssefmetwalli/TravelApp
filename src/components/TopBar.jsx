import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
           <BsChatSquareDots size={30} className= 'text-[var(--primary-dark)] mr-2' />
           <h1 className='text-xl font-bold text-grey-700'> Egypt Ryokou </h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6' >
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-grey-700'> 9AM - 5AM</p>
            </div>
        </div>
        <div>
            <div className='hidden md:flex items-center px-6' >
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-grey-700'> 070-4085-3411</p>
            </div>
        </div>
        {/* <buton> Get a Free Quote</buton> */}
    </div>
  )
}

export default TopBar
