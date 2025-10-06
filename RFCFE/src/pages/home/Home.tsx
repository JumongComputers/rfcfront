// import React from 'react'
import './Home.css'
import LandingPage from './LandingPage'
import Service from './Service'
import Carousel from './Carouse'
import More from './More'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Service/>
      <Carousel/>
      <More/>
    </div>
  )
}

export default Home
