import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import message from '../../Images/message.png'
function Navbar() {
  const [showbutton,setShowButoon]=useState(false);
  return (
    <nav className='sticky'>
    <div className='navbarbody'>
         <div className='linksparentbody'>
             <h1> <img src={message}/> Get in Touch</h1>
            <div className='closeicon'>
            <AiOutlineClose style={{display : showbutton? 'block' : 'none' }} onClick={()=>{setShowButoon(false)}} className='closeicon'/>
            <AiOutlineMenu style={{display : showbutton? 'none' : 'block' }} onClick={()=>{setShowButoon(true)}} className='closeicon'/>
      
            </div>
               </div>
            <div className={showbutton ? "showclass":"hideclass"}>
            <div className='navbarlinks'>
            <h4><a href='#home'>Home</a></h4>
             <h4> <a href='#about'>About Me</a></h4>
             <h4><a href='#services'>Services</a></h4>
              <h4><a href='#portfolio'>Portfolio</a></h4>
               <h4><a href='#blog'>Blogs</a></h4>
              <button>Resume</button>
            </div>
         
              
            </div>
          
   
    </div>
    </nav>
  )
}

export default Navbar
