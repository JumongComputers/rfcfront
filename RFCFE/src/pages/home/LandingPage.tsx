import React from 'react'
import './LandingPage.css'
import { TvMinimal } from 'lucide-react'
// import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <div className='landing'>

      <div className="container">
        <span>LATEST SERMON</span>
        <h1>Rock Foundation Church</h1>
        <p>Making Mature Followers of Christ</p>

        <div>
              <button> <TvMinimal /><span>WATCH SERMON</span></button>
        </div>
        
      </div>
      
      
    </div>

   
    </>
  )
}

export default LandingPage
