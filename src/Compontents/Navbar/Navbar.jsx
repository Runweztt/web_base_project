import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import logoimg from '../../assets/logoimg.png'


function Navbar() {
      const [navOpen, setNavOpen] = useState(false);
  

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
       <header>
        <nav className={`nav ${navOpen ? 'open' : ''}`}>
            <img src={logoimg} alt="logo" />

            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/Product'><li>product</li></NavLink>
            </ul>

            <button className='btn1'>sign in </button>
        </nav>
         <button className="nav-toggle-btn" onClick={toggleNav} aria-label="Toggle Menu">
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>
       </header>

    </>
  )
}

export default Navbar