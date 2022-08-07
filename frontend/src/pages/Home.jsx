import React from 'react'
import Banner from '../components/Banner'
import MovieSliders from '../components/MovieSliders'

function Home() {
  
  return (
    <>
      <Banner/> 
      <div className="out-home">
        <MovieSliders/>
      </div>
    </>
  )
}

export default Home