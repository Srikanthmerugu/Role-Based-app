import React from 'react'
import LandingScreen from './LandingScreen'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import HowItWorks from './HowItWorks'
import PopularRestaurants from './PopularRestaurants'
import Footer from './Footer'
import VideoDemoSection from './VideoDemoSection'

const Home = () => {
  return (
    <div>
        <LandingScreen />
        {/* After show this  */}
        <FeaturesSection />
        <VideoDemoSection />
        <HowItWorks />
        <PopularRestaurants />

      
<Footer />


    </div>
  )
}

export default Home