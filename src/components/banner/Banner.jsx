import React from 'react'
import "./styles.scss"

const Banner = ({bgImage, text}) => {
  return (

    <div className='banner' style={{backgroundImage:`url(${bgImage})`}}>
       <div className='bannerOverlay'></div>
      <div className='bannerText'>{text}</div>
    </div>
  )
}

export default Banner