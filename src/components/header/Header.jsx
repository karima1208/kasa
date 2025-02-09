import React from 'react'
import "./styles.scss"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img className='image' src={Logo}/>
        <nav className='headerlink'>
            <Link to="/">ACCUEIL</Link>
            <Link to="/about-us">A PROPOS</Link>
        </nav>
    </header>
  )
}

export default Header