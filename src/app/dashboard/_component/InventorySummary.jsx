import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";



const InventorySummary = () => {
  return (
    <div className='bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-100 border-opacity-35 flex flex-col gap-y-4 p-5 w-5/12'>
      <div>
        <h2 className='capitalize text-lg'>inventory Summary</h2>
      </div>
      <div className='flex justify-between w-auto'>
        <div className='flex flex-col text-center gap-y-2'>
          <div className='flex justify-center'>
          <IoPersonCircleOutline className='text-3xl text-blue-500' />
          </div>
          <div>
            <p>868</p>
            <h4>Quantity in Hand</h4>
          </div>
        </div>
        <div className='flex flex-col text-center gap-y-2'>
          <div className='flex justify-center'>
          <TbCategory className='text-3xl text-green-300' />
          </div>
          <div>
            <p>200</p>
            <h4>To be received</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventorySummary