import React from 'react'
import image from '../assets/images/mainImage.png'
import './Hero.css'
const Hero = () => {
    return (
        <section>
            <div className="hero_container">
                <img src={image} alt="" />
            </div>

        </section>
    )
}

export default Hero