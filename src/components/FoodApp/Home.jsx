import React from 'react'
import LandingScreen from './LandingScreen'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import HowItWorks from './HowItWorks'
import PopularRestaurants from './PopularRestaurants'

const Home = () => {
  return (
    <div>
        <LandingScreen />
        {/* After show this  */}
        <FeaturesSection />
        <HowItWorks />
        <PopularRestaurants />

      



    </div>
  )
}

export default Home