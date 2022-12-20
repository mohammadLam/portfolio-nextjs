import { Carousel } from '@trendyol-js/react-carousel'
import React from 'react'
import useFetch from '../hooks/useFetch'
import Container from './Container'
import CustomArrow from './RightArrow'
import IResponse from '../interface/location'

const Locations: React.FC = () => {
  const response = useFetch<IResponse>('https://rickandmortyapi.com/api/location', 'location')

  return (
    <Container>
      <h3 className='font-medium text-2xl mb-9'>Locations</h3>

      {response.data && (
        <Carousel
          swiping
          className='flex items-center'
          show={4.5}
          slide={1}
          rightArrow={<CustomArrow />}
        >
          {response.data.results.slice(0, 10).map(location => (
            <div
              key={location.id}
              className='bg-primary border border-turquoise py-5 px-6 w-[360px]'
            >
              <p className='text-lg font-medium'>#{location.id}</p>
              <p className='text-2xl font-medium'>{location.name}</p>
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  )
}

export default Locations
