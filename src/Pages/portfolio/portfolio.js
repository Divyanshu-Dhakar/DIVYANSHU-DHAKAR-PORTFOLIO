import React from 'react'
import './portfolio.css'
import Tabslider from '../../Components/Tabslider/tabslider';
const portfolio = () => {
  return (
    <div>
      <div className='portfolio' id='portfolio'>
       <div className='head'><h1>Portfolio</h1></div> 
        <Tabslider />
      </div>
    </div>
  )
}

export default portfolio
