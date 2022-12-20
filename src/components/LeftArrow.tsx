import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

const LeftArrow = () => {
  return (
    <div className='w-[50px] h-[50px] absolute top-0 bottom-0 z-10 my-auto -left-[25px] flex items-center justify-center rounded-full bg-white'>
      <ChevronLeftIcon className='w-6 h-6 text-chartreuse' />
    </div>
  )
}

export default LeftArrow
