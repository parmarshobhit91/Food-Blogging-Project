import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <div className='background'></div>
        <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#drinks">Drinks</a></li>
        <li><a href="#bestrestaurants">Best Restaurants</a></li>
      </ul>
    </nav>
    </div>
  )
}


export default Navbar
