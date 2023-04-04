import React, {useState} from 'react';
import './Navbar.css';
import message from '../../Images/message.png'
function Navbar() {
  const [showbutton,setShowButoon]=useState(false);
  return (
    <nav className='sticky'>
    <div className='navbarbody'>
         <div className='linksparentbody'>
             <h1> <img src={message}/> Get in Touch</h1>
            <div className='closeicon'>
            <i style={{display : showbutton? 'block' : 'none' }} onClick={()=>{setShowButoon(false)}} className='closeicon' class="fa-regular fa-bars"></i>
            <i style={{display : showbutton? 'none' : 'block' }} onClick={()=>{setShowButoon(true)}} className='closeicon' class="fa-sharp fa-light fa-circle-xmark"></i>
  
      
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
