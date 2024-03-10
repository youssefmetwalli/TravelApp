import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'> Send us a message </h2>
        <p className='text-center text-gray-700 py-2'> We're Standing by!</p>

        <div className='grid md:grid-cols-2'>
        <img src='https://media.istockphoto.com/id/1301149442/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%A8%E3%82%B8%E3%83%97%E3%83%88%E3%81%AE%E3%83%AB%E3%82%AF%E3%82%BD%E3%83%BC%E3%83%AB%E7%A5%9E%E6%AE%BF%E3%81%A8%E3%81%9D%E3%81%AE%E7%BE%8E%E3%81%97%E3%81%84%E6%9F%B1%E3%82%92%E8%A8%AA%E3%82%8C%E3%82%8B%E5%B8%BD%E5%AD%90%E3%82%92%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%9F%E8%8B%A5%E3%81%84%E8%A6%B3%E5%85%89%E5%AE%A2%E3%82%A8%E3%82%B8%E3%83%97%E3%83%88.jpg?s=612x612&w=0&k=20&c=tb1R3_q6zpX5__WGGaiZrwn0ZDoKzSz04zhCa07Yz4w='
         alt='/'
         className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
         />
        <form>
            <div className='grid grid-cols-2'>
                <input type='text' placeholder='First' className='border m-2 p-2' />
                <input type='text' placeholder='Last' className='border m-2 p-2' />
                <input type={'email'} placeholder='Email'className='border m-2 p-2' />
                <input type='tel' placeholder='Phone' className='border m-2 p-2'  />
                <input type='text' placeholder='Address' className='border col-span-2 m-2 p-2'  />
                <textarea cols={30} rows='10' className='border col-span-2 m-2 p-2' />
                <button className='col-span-2 m-2'> Submit </button>

            </div>
        </form>
        </div>


    </div>
  )
}

export default Contact