import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='/'
        className='w-full h-full object-cover'
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full h-full md:-[50%] max-w-[600px] flex flex-col text-white p-4 '>
                <h1 className='font-bold text-xl'> Find Your Special Trip</h1>
                <h2 className='py-4 italic'> With Travel App</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sunt aut sint dignissimos reiciendis ex veritatis, blanditiis aperiam, eligendi accusamus omnis tempore.
                     Illum et iste ut tenetur, commodi recusandae ipsam non!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Background