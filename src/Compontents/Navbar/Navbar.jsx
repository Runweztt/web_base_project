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
   
  // close the navbar menu 
  const CloseNav = ()=>{
    setNavOpen(false)
     window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
  return (
    <>
      <header>
          <img src={logoimg} alt="logo" />
        <nav className={`nav ${navOpen ? 'open' : ''}`}>
        

          <ul>
            <li><NavLink to='/'onClick={CloseNav}>Home</NavLink></li>
            <li><NavLink to='/About'onClick={CloseNav}>About</NavLink></li>
            <li><NavLink to='/Contact'onClick={CloseNav}>Contact</NavLink></li>
              <li><NavLink to='/Product'onClick={CloseNav}>Workspace</NavLink></li>
          </ul>


          <button className='btn4'onClick={CloseNav}>sign in </button>
        </nav>
        <button className="nav-toggle-btn" onClick={toggleNav} aria-label="Toggle Menu">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

    </>
  )
}

export default Navbar