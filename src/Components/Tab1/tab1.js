import React from 'react'
import './tab1.css'
import Project from '../../Components/Cardproject/cardproject';
import project1 from '../../Images/project1.png';
import project2 from '../../Images/project2.png';
import project3 from '../../Images/project3.png';
import project4 from '../../Images/project4.png';

const tab1 = () => {
  return (
    <div>
      <div className='projects-row'>
    <div className='projects'>
    <Project
imgsrc={project1}
title="Trip planning Website"
tags="#FRONTENDPROJECT #HTML #CSS #JS"
content="A user-focused, responsive website for planning trips and booking created using HTML5, CSS3, and Javascript.
Include sections such as About, Top Highlights, Gallery, and FAQs."
livelink="https://bbmarketplace.secure.force.com/bbknowledge/servlet/rtaImage?eid=ka30V000001E1TR&feoid=00N0V000008zinK&refid=0EMd00000015APD"
/>
<Project
imgsrc={project2}
title="Home Decor Website"
tags="#FRONTENDPROJECT #HTML #CSS #JS"
content="A detail oriented project showcase website of home decoration and architecture company. Focuse to showcase architectural designs. Auseroriented design."
livelink="https://homezop-divyanshu-dhakar.vercel.app/"
gitlink="https://github.com/Divyanshu-Dhakar/Homezop-Divyanshu-Dhakar"
/>
<Project
imgsrc={project3}
title="Agriculture Website"
tags="#FRONTENDPROJECT #HTML #CSS #JS"
content="A responsive website for the company to showcase the product like chia seed for getting the contract. It is
composed of sections such as About, Why Choose, Product Description, Contact, Gallery."
gitlink="https://github.com/Divyanshu-Dhakar/MEWAD-BHUMI"
livelink="https://mewadbhumi.com/"
/>

    </div>
 
    <div className='projects'>
    <Project
imgsrc={project4}
title="College Website"
tags="#FRONTENDPROJECT #React #CSS"
content="The website for the college was developed on React Js, CSS3, and Javascript. This is a static site for the college,
from which any user can find out the details of the college."
livelink="https://pce-website.vercel.app/"
gitlink="https://github.com/Divyanshu-Dhakar"
/>
<Project
imgsrc={project1}
title="Trip planning Website"
tags="#FRONTENDPROJECT #HTML #CSS #JS"
content="A user-focused, responsive website for planning trips and booking created using HTML5, CSS3, and Javascript.
Include sections such as About, Top Highlights, Gallery, and FAQs."
livelink="https://bbmarketplace.secure.force.com/bbknowledge/servlet/rtaImage?eid=ka30V000001E1TR&feoid=00N0V000008zinK&refid=0EMd00000015APD"
/>
    </div>
</div>
    </div>
  )
}

export default tab1
