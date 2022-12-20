import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Cast from './pages/Cast'
import CastProfile from './pages/CastProfile'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main className='relative overflow-hidden'>
        <Link to='/'>
          <img
            className='absolute inset-0 mx-auto w-[134px] md:w-[226px] top-[58px]'
            src='/Logo.png'
            alt='logo'
          />
        </Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Cast />} />
          <Route path='/character/:characterId' element={<CastProfile />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
