import React from 'react'
import Navigation from './components/Navigation'
import ProductList from './components/ProductList'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'  
import FooterEnd from './components/FooterEnd'
import Hero from './components/Hero'


function App() {
  return (
    <div>
      
      <Navigation />
      <Hero />
      <ProductList />
      <SocialMedia />
      <Footer />
      <FooterEnd />
      
    </div>
  )
}

export default App