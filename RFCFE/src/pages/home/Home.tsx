// import React from 'react'
import './Home.css'
import LandingPage from './LandingPage'
import Service from './Service'
import Carousel from './Carouse'
import More from './More'
import Card from './Card'
import Explore from './Explore'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Service/>
      <Carousel/>
      <More/>
      <Card/>
      <Explore/>
    </div>
  )
}

export default Home
