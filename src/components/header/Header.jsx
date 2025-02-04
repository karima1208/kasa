import React from 'react'
import "./styles.scss"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img src={Logo}/>
        <nav className='headerlink'>
            <Link to="/">Accueil</Link>
            <Link to="/about-us">A propos</Link>
        </nav>
    </header>
  )
}

export default Header