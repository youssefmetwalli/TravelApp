import React from 'react'
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <Link to="../pages/History" className='relative p-4 flex flex-col justify-center'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'>History & Culture</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://wallpapercave.com/wp/wp2887748.jpg' alt='/' />
      </Link>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'> Liveliness</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://wallpapercave.com/wp/wp2888180.jpg' alt='/' />
      </div>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'> Natural Beauty</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://classic-collection.co.uk/images/blog/wp-content/uploads/2018/01/shutterstock_288797549_1500x1000px.jpg' alt='/' />
      </div>

    </div>
  )
}

export default Activities