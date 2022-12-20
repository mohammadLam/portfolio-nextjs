import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {
  page: number
  nextPage: null | string
  prevPage: null | string
}

const Paginate: React.FC<Props> = ({ page }) => {
  return (
    <div className='flex items-center gap-x-6 w-max mx-auto'>
      <p className='text-xl font-medium'>Page</p>
      <div className='flex items-center gap-x-5'>
        <button className='w-6 h-6 rounded-full flex items-center justify-center border text-[#888888]'>
          <ChevronLeftIcon className='w-4 h-4' />
        </button>

        <input
          type='text'
          className='bg-transparent border border-turquoise rounded-full w-[90px] font-base text-turquoise font-medium outline-none text-center px-6 py-2'
        />

        <button className='w-6 h-6 rounded-full flex items-center justify-center border text-[#888888]'>
          <ChevronRightIcon className='w-4 h-4' />
        </button>
      </div>
      <p className='text-xl font-medium'>of {page}</p>
    </div>
  )
}

export default Paginate
