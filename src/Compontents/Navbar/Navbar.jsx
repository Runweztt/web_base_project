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
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Product'>Workspace</NavLink></li>
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