import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [menuClicked, setMenuClicked] = useState(false);


    
    const handleMenuOpen = () =>{
        setMenuOpen(!menuOpen);
      
    }

  
    const handleMenuClicked = () =>{
        setMenuOpen(false);
      
    }


    return ( 
    <nav>
        <Link to='/' className='title'>IT V</Link>
        <ul className={menuOpen? 'open': ''}>
        <li>
                <NavLink to='/' className={menuClicked? 'clicked': ''} onClick={handleMenuClicked} >Home</NavLink>
            </li>
            <li>
                <NavLink to='/About' className={menuClicked? 'clicked': ''} onClick={handleMenuClicked}>About</NavLink>
            </li>
            <li>
                <NavLink to='Services' className={menuClicked? 'clicked': ''} onClick={handleMenuClicked}>Services</NavLink>
            </li>
            <li>
                <NavLink to='Contact' className={menuClicked? 'clicked': ''} onClick={handleMenuClicked}>Contact</NavLink>
            </li>
        </ul>
        <div className='burger' onClick={handleMenuOpen
      }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    )
};

export default Navbar;