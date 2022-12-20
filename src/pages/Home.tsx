import React from 'react'
import Hero from '../components/Hero'
import Episodes from '../components/Episodes'
import Locations from '../components/Locations'

const Home: React.FC = () => {
  return (
    <div>
      <div className='absolute -top-[150px] -right-[150px] w-[360px] h-[360px] bg-[#2A3E84] filter blur-[175px]'></div>
      <div className='absolute -bottom-[200px] -left-[150px] w-[360px] h-[360px] bg-[#2A3E84] filter blur-[175px]'></div>
      <Hero />

      <div className='relative pt-[300px] pb-[80px]'>
        <Episodes />
        <Locations />
        <img
          className='absolute top-[250px] right-0'
          src='/home-page/bg-elements/Star.png'
          alt='star'
        />
      </div>

      <div className='spiral-bg'></div>
      <div className='star-bg-'></div>
    </div>
  )
}

export default Home
