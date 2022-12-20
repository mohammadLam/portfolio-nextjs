import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
import useFetch from '../hooks/useFetch'
import Response from '../interface/character'
import Cast from './Cast'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom'

const MeetTheCast: React.FC = () => {
  const navigate = useNavigate()
  const response = useFetch<Response>('https://rickandmortyapi.com/api/character', 'characters')

  return (
    <Container className='relative top-[335px] z-20'>
      <div className='flex justify-between items-center mb-5'>
        <h3 className='text-2xl font-medium'>Meet The Cast</h3>
        <button
          onClick={() => navigate('/characters')}
          className='border border-turquoise px-6 py-2 text-lg rounded'
        >
          View All
        </button>
      </div>

      {response.data && (
        <Carousel
          className='flex'
          swiping
          show={5.5}
          slide={1}
          rightArrow={<RightArrow />}
          leftArrow={<LeftArrow />}
        >
          {response.data.results.map(cast => (
            <Link key={cast.id} to={`/character/${cast.id}`}>
              <Cast name={cast.name} image={cast.image} />
            </Link>
          ))}
        </Carousel>
      )}
    </Container>
  )
}

export default MeetTheCast
