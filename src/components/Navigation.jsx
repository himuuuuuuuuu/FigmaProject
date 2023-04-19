import React from 'react'
import './Navigation.css'

import PersonIcon from '../assets/icons/PersonIcon.svg';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import CartIcon from '../assets/icons/CartIcon.svg';
import HeartIcon from '../assets/icons/HeartIcon.svg';

function Navigation() {
  return (
    <nav className="Navigation">
        <div className='Navigation_container'>
            <div className='Navigation_logo'>
                <a href='/'>LearnBay Phones</a>
                </div>
                <div className='Navigation_links'>

                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Shop</a>
                    <a href='/'>Blog</a>


                </div>
                <div className='Navigation_options'>

                    <div className='Navigation_options_item'>

                
                <img src={PersonIcon} alt=""/>
                Login/Register
                </div>

                <div className='Navigation_options_item'>              
                <img src={SearchIcon} alt=""/>
                
                </div>

                <div className='Navigation_options_item'>              
                <img src={CartIcon} alt=""/>
                4
                </div>

                <div className='Navigation_options_item'>              
                <img src={HeartIcon} alt=""/>
                8
                </div>

                </div>

            </div>

        </nav>
  )
}

export default Navigation