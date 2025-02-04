import React from 'react'
import "./styles.scss"

const Banner = ({bgImage, text}) => {
  return (
    <div className='banner' style={{backgroundImage:`url(${bgImage})`}}><div className='bannerHover'>{text}</div></div>
  )
}

export default Banner