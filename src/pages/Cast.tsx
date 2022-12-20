import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Response from '../interface/character'
import CastBox from '../components/Cast'
import Container from '../components/Container'
import SearchBar from '../components/SearchBar'
import Paginate from '../components/Paginate'

const Cast: React.FC = () => {
  const [page, setPage] = useState(1)

  const response = useFetch<Response>(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    'characters' + page
  )

  return (
    <Container className='pb-[80px]'>
      <div className='flex justify-between mb-10 items-center pt-[216px]'>
        <h1 className='font-semibold text-turquoise text-[64px]'>The Cast</h1>
        <SearchBar />
      </div>
      {response.data && (
        <>
          <div className='grid grid-cols-5 gap-16 mb-10'>
            {response.data.results.map(cast => (
              <CastBox key={cast.id} name={cast.name} image={cast.image} />
            ))}
          </div>

          <Paginate
            page={response.data.info.pages}
            nextPage={response.data.info.next}
            prevPage={response.data.info.prev}
          />
        </>
      )}

      <img
        src='/cast/Background.png'
        alt='cast-background-image'
        className='absolute -z-10 top-0 left-0'
      />

      <img
        src='/cast/Star.png'
        alt='cast-background-image'
        className='absolute -z-10 bottom-0 left-20'
      />
    </Container>
  )
}

export default Cast
