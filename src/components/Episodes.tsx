import { Carousel } from '@trendyol-js/react-carousel'
import React from 'react'
import useFetch from '../hooks/useFetch'
import IResponse from '../interface/episode'
import Container from './Container'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

const Episodes: React.FC = () => {
  const response = useFetch<IResponse>('https://rickandmortyapi.com/api/episode', 'episodes')

  return (
    <Container className='mb-[110px]'>
      <h3 className='font-medium text-2xl mb-9'>Episodes</h3>

      {response.data && (
        <Carousel
          swiping
          className='flex items-center'
          show={4.5}
          slide={1}
          rightArrow={<RightArrow />}
          leftArrow={<LeftArrow />}
        >
          {response.data.results.slice(0, 10).map(episode => (
            <div
              key={episode.id}
              className='bg-primary border border-turquoise py-5 px-6 w-[360px]'
            >
              <p className='text-lg font-medium'>{episode.episode}</p>
              <p className='text-2xl font-medium'>{episode.name}</p>
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  )
}

export default Episodes
