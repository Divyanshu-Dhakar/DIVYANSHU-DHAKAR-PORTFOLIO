import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
<div className='Footer'>

<footer className="footer">
        <h1>Divyanshu Dhakar</h1>
        <ul className="footermenu">
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">Blogs</a> </li>
          <li> <a href="#">Portfolio</a> </li>
          <li> <a href="#">Freelance</a> </li>
          <li> <a href="#">Contact</a> </li>
        </ul>
        <div className="footerbottom">
          <ul className="footericons">
            {/* In order to use these icons paste   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"> in html <head> tag. */}
            <li> <a href="#"><i className="fa-brands fa-instagram color-white" /></a> </li>
            <li> <a href="#"><i className="fa-brands fa-linkedin color-white" /></a> </li>
          </ul>
          <p>© All rights reserved || Created & Managed by Divyanshu Dhakar</p>
        </div>
      </footer>
</div>

    </div>
  )
}

export default Footer
