import React from 'react'
import "./styles.scss";
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
  <div>
   <h1 className="error">404</h1>
   <p className="error-message">Oups! La page que vous demandez n'existe pas</p>
  
      <Link to="/" className='back-home'>Retourner sur la page d accueil</Link>
 
  </div>
  )
}

export default Error404