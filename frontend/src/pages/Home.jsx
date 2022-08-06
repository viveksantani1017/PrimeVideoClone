import React from 'react'
import Banner from '../components/Banner'
import Language from '../components/Language'
import MovieSliders from '../components/MovieSliders'

function Home() {
  return (
    <>
      <Banner/> 
      <div className="out-home">
        <Language/>      
      </div>
      <div className="out-home">
        <MovieSliders/>
      </div>
    </>
  )
}

export default Home