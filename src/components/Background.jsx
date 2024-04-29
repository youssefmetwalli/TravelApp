import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://wallpapercave.com/wp/wp2887696.jpg'
        alt='/'
        className='w-full h-full object-cover'
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full h-full md:-[50%] max-w-[600px] flex flex-col text-white p-4 '>
                <h1 className='font-bold text-xl'> Discover Egypt </h1>
                <h2 className='py-4 italic'> With Egypt Ryokou</h2>
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