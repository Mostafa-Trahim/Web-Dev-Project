import React from 'react'
import './Sidebar.css'
import icon1 from '../img/anime-icon.jpg'
import icon2 from '../img/icon2.jpg'
import icon3 from '../img/icon3.jpg'
import icon4 from '../img/icon4.jpg'
import icon5 from '../img/icon5.jpg'
import icon6 from '../img/icon6.jpg'
import icon7 from '../img/icon7.jpg'



const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='Sidebar-SignUp'>

            <h2>New to 9gag?</h2>
            <p>Sign up to see more content!</p>
            <button className='SignUp-btn'>Sign up</button>
        </div>

        <div className='Sidebar-Categories'>
            <h2>Interests</h2>
            <ul>
                <li>
                    <img src={icon1} alt="logo" />  
                    <span>Anime & Manga</span>
                </li>
                <li>
                    <img src={icon2} alt="logo" />  
                    <span>Latest News</span>
                </li>
                <li>
                    <img src={icon3} alt="logo" />  
                    <span>Humor</span>
                </li>
                <li>
                    <img src={icon4} alt="logo" />  
                    <span>Memes</span>
                </li>
                <li>
                    <img src={icon5} alt="logo" />  
                    <span>Gaming</span>
                </li>
                <li>
                    <img src={icon6} alt="logo" />  
                    <span>WTF</span>
                </li>
                <li>
                    <img src={icon7} alt="logo" />  
                    <span>Relationship & Dating</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar