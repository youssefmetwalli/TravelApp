import React from 'react'

const Booking = () => {
  return (
    <div id= 'deals' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label className=''>Destination</label>
                <label className='text-s font-thin mb-2'>which areas do you want to visit in Egypt?</label>
                <select name=''id='' className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option> Aswan </option>
                    <option> Luxor </option>
                    <option> Cairo </option>
                    <option> Giza </option>
                    <option> Alexandria </option>
                </select>
            </div>
            <div className='flex w-full'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label className='mb-2'> From:</label>
                    <input type='date' className='border rounded-md p-2'/>
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label className='mb-2'> To:</label>
                    <input type='date' className='border rounded-md p-2'/>
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default Booking