import './education.css'
import React from 'react'

const experience = () => {
  return (
    
<div className="container">
    <h1>Education</h1>
        <div className="wrapper">
          <div className="line" />
          <div className="experience-card">
            <span className="dot" />
            <h3>Poornima College of Engineering</h3>
            <p>

Currently pursuing Undergraduate degree in Electrical Engineering.<br/>

- Vice Captain Students Council<br/>
- Graphic Lead of Poornima’s Annual Fest<br/>
- Organized two times Alumni Meet<br/>
- Designing and Decorative Club Lead</p>
            <span className="time">Oct 2020 - June 2024</span>
          </div>
          <div className="experience-card">
            <span className="dot" />
            <h3>Lord Budha Public School, Kota</h3>
            <p>Testing for development activities, Web designing, Visual Designing<br />
              Expertise in tool such as Figma, Adobe Photoshop, Adobe Illustrator</p>
            <span className="time">06/2018 - 07/2020</span>
          </div>
          <div className="experience-card">
            <span className="dot" />
            <h3>Atomic Energy Central School, Rawatbhata</h3>
            <p>Secondary education till class 10th
              </p>
            <span className="time">May 2008- May 2018</span>
          </div>
     
        </div>
      </div>
  )
}

export default experience
