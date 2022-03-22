import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { useRef } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <img src="../../assets/logo.png" alt="logo Nodazon" />
      <nav ref={navRef}>
        <Link to="/home">Accueil</Link>
        <Link to="/products">Nos produits</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
