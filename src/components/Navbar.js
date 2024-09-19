import React from 'react'
import { FaBars } from "react-icons/fa";
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    
      <div className="menuBlock">
        <ul>
          <li><span><FaBars/> </span>All</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <Link to="/mobile"><li>Mobiles</li></Link>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Prime</li>
          <li>Electronice</li>
          <li>Fashion</li>
          <li>NewRelase</li>
          <li>Home & Kitchen</li>
          <li>Amazon Pay</li>
          <li>Computer</li>
          <li>Car & Motorbike</li>
        </ul>
      </div>
  )
}

export default Navbar
