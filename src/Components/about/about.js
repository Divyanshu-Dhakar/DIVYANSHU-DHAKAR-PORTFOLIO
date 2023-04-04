import './about.css'
import React from 'react'
import profile from '../../Images/profile.png'
import message from '../../Images/message.png'
import location from '../../Images/location.png'
const about = () => {
  return (
    <div id='about'>

      <div  className='about-section' >
        <h1>About</h1>
        <div className='about'>
          <div className='about-img'>
            <img src={profile} />
          </div>
          <div className='content'>
            <p>Hi, I'm Divyanshu Dhakar, a self-taught passionate UX/UI designer & FrontEnd developer with 2+ years of experience in the creative industry from India. I have worked across different technologies of the past and the present.<br/>
My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff with creativity that helps the world become a better place.</p>
            <h5>      <img src={message} alt='Hero' /><span/>divyanshudhakar29@gmail.com</h5>
            <h5>      <img src={location} alt='Hero' /><span/>Jaipur Rajasthan, India</h5>
          </div>
        </div>

      </div>
          </div>
  )
}

export default about
