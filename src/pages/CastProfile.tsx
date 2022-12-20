import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import useFetch from '../hooks/useFetch'
import { Character as ICharacter } from '../interface/character'

const CastDetails: React.FC = () => {
  const { characterId } = useParams()
  const { data } = useFetch<ICharacter>(
    `https://rickandmortyapi.com/api/character/${characterId}`,
    'character' + characterId
  )

  return (
    <Container className='pt-[252px]'>
      {data && (
        <div className='flex gap-x-[175px] items-center justify-between'>
          <div className='flex flex-col items-center gap-y-8 ml-[120px]'>
            <p className='absolute text-8xl font-extrabold text-stroke'>{data.name}</p>
            <h1 className='text-turquoise text-5xl font-semibold'>{data.name}</h1>

            <div className='w-[400px] h-[400px] p-[50px] border border-turquoise rounded-lg'>
              <img className='rounded-lg' src={data.image} alt={data.name} />
            </div>
          </div>

          <div className='w-[1px] h-[320px] bg-chartreuse'></div>

          <div className='flex flex-col gap-y-10 w-[800px]'>
            <div className='flex items-center gap-x-10'>
              <div className='w-[240px] h-[174px] border border-turquoise px-9 py-5 rounded-lg'>
                <img src='/cast-details/Icons/PNG/Status.png' className='mb-2' alt='status' />
                <p className='text-xl'>Status</p>
                <h3 className='text-[40px] font-semibold'>{data.status}</h3>
              </div>

              <div className='w-[240px] h-[174px] border border-turquoise px-9 py-5 rounded-lg'>
                <img src='/cast-details/Icons/PNG/Species.png' className='mb-2' alt='status' />
                <p className='text-xl'>Species</p>
                <h3 className='text-[40px] font-semibold'>{data.species}</h3>
              </div>

              <div className='w-[240px] h-[174px] border border-turquoise px-9 py-5 rounded-lg'>
                <img src='/cast-details/Icons/PNG/Gender.png' className='mb-2' alt='status' />
                <p className='text-xl'>Gender</p>
                <h3 className='text-[40px] font-semibold'>{data.gender}</h3>
              </div>
            </div>

            <div className='border border-turquoise px-9 py-5 rounded-lg'>
              <img src='/cast-details/Icons/PNG/origin.png' className='mb-2' alt='status' />
              <p className='text-xl'>Origin</p>
              <h3 className='text-[40px] font-semibold'>{data.origin.name}</h3>
            </div>

            <div className='border border-turquoise px-9 py-5 rounded-lg'>
              <img src='/cast-details/Icons/PNG/Location.png' className='mb-2' alt='status' />
              <p className='text-xl'>Last Known Location</p>
              <h3 className='text-[40px] font-semibold'>{data.location.name}</h3>
            </div>

            <div className='border border-turquoise px-9 py-5 rounded-lg overflow-hidden'>
              <img src='/cast-details/Icons/PNG/Episode.png' className='mb-2' alt='episodes' />
              <p className='text-xl'>Episode(S)</p>
              <ul className='list-disc pl-10'>
                {data.episode.slice(0, 5).map((episode, index) => (
                  <li key={index} className='text-[40px] font-semibold'>
                    {episode}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className='cast-details-image'></div>
      <div className='star-image'></div>
    </Container>
  )
}

export default CastDetails
