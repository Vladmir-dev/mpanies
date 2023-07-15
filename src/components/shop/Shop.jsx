import React from 'react'
import SideBar from './SideBar'
import Smain from './Smain'


const Shop = () => {
    
  return (
    <div className='w-full mt-[50px] mb-[50px] flex justify-center items-center '>
      <div className='w-[95%]  flex justify-start items-start'>
         <SideBar />
         <Smain />
      </div>
       
    </div>
  )
}

export default Shop