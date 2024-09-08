import React from 'react'
import Search from './Search'
import Moviegrid from './Moviegrid'
import "../styles/Home.css"

const Home = () => {


  return (
    <>
      <div className='head'>
      <h1>MOVIE SEARCH</h1>
      </div>
    
        <Search />
        <Moviegrid />

      
    </>
  )
}

export default Home
