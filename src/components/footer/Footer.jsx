import React from 'react'
import "./styles.scss"
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className='textfooter'>© 2020 Kasa. All rights reserved</p>
    </footer>

  )
}

export default Footer