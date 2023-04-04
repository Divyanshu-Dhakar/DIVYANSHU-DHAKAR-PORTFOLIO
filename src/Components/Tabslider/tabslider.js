import React from 'react'
import './tabslider.css'
import Tab1 from '../../Components/Tab1/tab1.js'
import Tab2 from '../../Components/Tab2/tab2.js'
const tabslider = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="box">
          <input defaultChecked="checked" id="box1" name="box" type="radio" /> 
          <label htmlFor="box1">Frontend Projects</label>
          <div className="content">

            <Tab1 />
             </div>
          <input id="box2" name="box" type="radio" /> 
          <label htmlFor="box2">UI/UX Designs</label>
          <div className="content">
            <Tab2 />
            </div>
    
        </div>
      </div>
    </div>
  )
}

export default tabslider
