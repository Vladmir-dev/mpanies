import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#ffebe7] w-full flex justify-center items-center p-4 md:h-[250px]'>
        <div className='flex justify-center items-center flex-col gap-5'>
            <h1 className='text-[25px] font-light text-center'>SIGN-UP THE MPANIES FAN CLUB TODAY</h1>
            <h4 className='text-center'>Subscribe to our mailing list to be notified about news, collections and special offers</h4>
            <div className='flex md:flex-row flex-col gap-5 w-full justify-center items-center'>
                <input type="text" placeholder='Your Email Address' className='md:w-[400px] w-[90%] border-[2px] border-[#ffaf9b] focus:outline-0 border-solid p-3'/>
                <button className='bg-black text-white px-10 py-2 hover:bg-[#ffaf9b] hover:text-black duration-500'>Submit</button>
            </div>
        </div>
        
    </div>
  )
}

export default NewsLetter