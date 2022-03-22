import React from 'react'
import {
  Browser as Router,
  Link } 
  from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/produits">Produits</Link>
      <Link to="/login">Se connecter</Link>
    </nav>
  )
}

export default Navbar
