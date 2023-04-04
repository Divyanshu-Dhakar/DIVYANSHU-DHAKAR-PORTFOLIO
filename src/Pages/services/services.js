import './services.css'
import React from 'react'
import graphic from '../../Images/graphic.png'
import code from '../../Images/code.png'
import video from '../../Images/video.png'
import design from '../../Images/design.png'

const services = () => {
    return (
        <div >
            <div className='services' id='services'>
                <h1>I can help you with</h1>
                <h3>Collaborate with brands and agencies to create<br/>impactful results.</h3>
                <div className='cards'>
                    <div className='card'>
                    <img src={video} alt='Hero' />
                    <h2>VIDEO EDITING</h2>
                    <h4>Editing Video that are efficient to market the product and create brand values</h4>
                    </div>
                    <div className='card'>
                    <img src={code} alt='Hero' />
                    <h2>WEB DEVELOPMENT</h2>
                    <h4>Transforming ideas into exceptional web experiences for users.</h4>
                    </div>
                    <div className='card'>
                    <img src={design} alt='Hero' />
                    <h2>UI/UX DESIGNING</h2>
                    <h4>Designing interfaces that are intuitive, efficient, and enjoyable to use.</h4>
                    </div>
                    <div className='card'>
                    <img src={graphic} alt='Hero' />
                    <h2>GRAPHIC DESIGNING</h2>
                    <h4>Crafting visually stunning designs that connect with your audience.</h4>
                    </div>
              
                </div>
              
            </div>

            </div>
    )
}

export default services
