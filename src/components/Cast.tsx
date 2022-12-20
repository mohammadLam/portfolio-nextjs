import React from 'react'

interface ICast {
  name: string
  image: string
}

const Cast: React.FC<ICast> = ({ name, image }) => {
  return (
    <div className='cast-box bg-primary'>
      <div>
        <img className='w-full h-[216px] object-cover' src={image} alt={name} />
      </div>
      <div className='py-6'>
        <h3 className='font-semibold text-base'>{name}</h3>
      </div>
    </div>
  )
}

export default Cast
