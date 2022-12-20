import React from 'react'
import MeetTheCast from './MeetTheCast'

const Hero: React.FC = () => {
  return (
    <div className='relative w-screen h-screen'>
      <div className='relative mx-auto md:w-[1475px] top-[125px] md:top-[230px] pl-5 md:pl-[190px] md:pr-[280px]'>
        <img
          className='absolute w-[70px] h-[70px] md:w-min md:h-min z-10 -top-6 md:-top-[100px] -left-2 md:left-10'
          src='/home-page/hero/bubble.png'
          alt='element'
        />

        <img
          className='hidden md:block absolute z-10 top-5 right-[210px]'
          src='/home-page/hero/pill.png'
          alt='element'
        />

        <h1 className='text-[40px] md:text-9xl leading-[40px] md:leading-[154px] font-extrabold relative flex flex-col w-max mb-4'>
          <span className='flex gap-x-5 items-end'>
            <span className='italic'>THE</span>
            <img
              src='/home-page/hero/portal.png'
              className='w-[68px] md:w-min md:h-min mb-1 md:mb-12'
              alt='portal'
            />
            <span className='bg-gradient-to-r from-chartreuse to-turquoise  text-transparent bg-clip-text'>
              RICK &
            </span>
          </span>
          <span>
            <span className='bg-gradient-to-tl from-chartreuse to-turquoise text-transparent bg-clip-text'>
              MORTY
            </span>
            <i>WIKI</i>
          </span>
        </h1>

        <img
          className='absolute w-[64px] h-[105px] md:w-min md:h-min z-10 -right-20 -bottom-20'
          src='/home-page/hero/gun.png'
          alt='element'
        />

        <div className='flex gap-16 justify-center'>
          <button className='flex items-center gap-x-[10px] px-6 rounded-full font-semibold py-4 h-[58px] bg-gradient-to-l from-turquoise to-chartreuse text-white text-xl'>
            <img src='/play-btn.png' alt='playbutton' />
            <span>Watch Now</span>
          </button>
          <p className='w-[364px] text-sm text-turquoise font-semibold gap-x-3'>
            Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild
            escapades in other worlds and alternate dimensions.
          </p>
        </div>

        <h1 className='text-9xl font-bold absolute top-[65px] -z-10'>
          <span className='bg-gradient-to-tl from-chartreuse to-turquoise text-transparent bg-clip-text filter blur-[75px]'>
            THE RICK &
          </span>
        </h1>
      </div>

      <MeetTheCast />
      <div className='hero-image'></div>
    </div>
  )
}

export default Hero
