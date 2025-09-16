
// import React from 'react'
import './Header.css'
import { LogOut, Menu } from 'lucide-react';
// import LogOut from './LogOut';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
         <img src="./images/logo.png" alt="logo" />
      </div>

      <div className="menus">
       <ul className="mencont">
        <li>
          HOME
        </li>
        <li>
          ABOUT
        </li>
        <li>
          GIVE
        </li>
        <li>
          E-LIBRARY
        </li>
        <li>
          MEDIA
        </li>
        <li>
          BLOG
        </li>
        <li>
          ANNOUNCEMENT
        </li>
        <li>
          CONTACT
        </li>
       </ul>
      </div>

      <div className='desktmenus'>
       <div className="conta">
        <div className="cruma">
              
               <LogOut 
               size={"20px"}
               
               
               />
        </div>
        <div className="crumb">
            LOGIN
        </div>
       </div>

       <div className="contb">
        <div className="cruma">
             <Menu 
             size="20px"
             />
        </div>
        <div className="crumb">
            LOGIN
        </div>
       </div>
      </div>

      <div className="harm">
            <Menu />

      </div>

      
    </div>
  )
}

export default Header
