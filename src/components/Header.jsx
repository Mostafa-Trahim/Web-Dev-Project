import React from 'react'
import './Header.css'
import logo1 from '../img/sprite-logo.png'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import logo from '../img/logo.png'




const Header = () => {
  return (
    <div className='Header'>
        <div className='Header-left'>
            <img src={logo} alt="logo" />
            <nav className='Navbar'>
                <ul>
                    <li>🔀 Shuffle</li>
                    <li>🏴‍☠️ Memeland</li>
                    <li>💫 Vibes</li>
                </ul>
            </nav>

            <div className='Header-search'>
                <FaSearch />
                <input type="text" placeholder='Search' />
            </div>

        </div>

        <div className='Header-right'>

            

            <div className='Header-icons'>
                <button>Login</button>
                <button>Sign Up</button>
                <FaUserCircle className='User-icon'/>
                <button className='Post-btn'>
                    <MdEdit className='Post-icon'/>
                    <span>Post </span>
                </button>

            </div>
                 
        </div>
    </div>
  )
}

export default Header