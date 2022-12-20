import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const menuItems = [
  { id: 1, name: 'Characters' },
  { id: 2, name: 'Location' },
  { id: 3, name: 'Episodes' }
]

const SearchBar: React.FC = () => {
  const [selected, setSelected] = useState(menuItems[0])

  return (
    <div className='border border-turquoise flex rounded-full items-center w-[424px]'>
      <Listbox as='div' className='relative' value={selected} onChange={setSelected}>
        <Listbox.Button className='flex gap-x-5 items-center font-semibold text-base bg-turquoise rounded-tl-full rounded-bl-full py-[18.5px] px-[32px]'>
          <span>{selected.name}</span>
          <ChevronDownIcon className='w-5 h-5' />
        </Listbox.Button>
        <Listbox.Options className='absolute rounded-lg bg-turquoise top-20 w-full z-10'>
          {menuItems.map(item => (
            <Listbox.Option
              className='font-semibold text-base py-4 px-5 border-b border-white cursor-pointer'
              key={item.id}
              value={item}
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <div className='flex items-center gap-x-3 ml-6'>
        <MagnifyingGlassIcon className='w-6 h-6' />
        <input
          className='bg-transparent outline-none placeholder:text-[#868686] font-semibold text-xl'
          placeholder='Search'
          type='text'
        />
      </div>
    </div>
  )
}

export default SearchBar
