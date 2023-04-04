import React from 'react'
import './tab2.css'
import Designcard from '../../Components/Designcard/carddesign';
import design1 from '../../Images/design1.png';
import design2 from '../../Images/design2.png';
import design3 from '../../Images/design3.png';
import design4 from '../../Images/design4.png';
import design5 from '../../Images/design5.png';
import design6 from '../../Images/design6.png';
import design7 from '../../Images/design7.png';
import design8 from '../../Images/design8.png';
import design9 from '../../Images/design9.png';
import design12 from '../../Images/design12.png';
import project1 from '../../Images/project1.png';
import project2 from '../../Images/project2.png';
import project3 from '../../Images/project3.png';
import project4 from '../../Images/project4.png';


const tab2 = () => {
    return (
        <div>
            <div className='design-grid'>
            <div className='projects-row'>
    <div className='projects'>
                <Designcard
                    designtitle="Kirane Wala|| A Local Shop web design"
                    designimg={design1}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent="A design for showcaing products of local shops"
                />
                <Designcard
                    designtitle="Sneakers||Shoes Selling Website"
                    designimg={design2}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                
                <Designcard
                    designtitle="Food Yard || A restaurant website"
                    designimg={design3}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                      <Designcard
                    designtitle="Incredible India || A UI/UX Design"
                    designimg={design4}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent="A design for showcaing products of local shops"
                />
                </div>
                <div className='projects'>
                <Designcard
                    designtitle="Sneakers || A UI/UX Design for shoe selling website"
                    designimg={design5}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                <Designcard
                    designtitle="Jaynath Jewelers || A jeweler shop website"
                    designimg={design6}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                    <Designcard
                    designtitle="Travel Incredible || A web design for travelling website"
                    designimg={project1}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent="A design for showcaing products of local shops"
                />
                <Designcard
                    designtitle="HomeZop || A home Decorative Website"
                    designimg={project2}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                </div>
                <div className='projects'>
            
                <Designcard
                    designtitle="Mewad Bhumi || A Agriculture website"
                    designimg={project3}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                 <Designcard
                    designtitle="E-Course || A course selling website"
                    designimg={design7}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    
                />
                <Designcard
                    designtitle="E-Course || Responsive design/ Mobile Design"
                    designimg={design8}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                <Designcard
                    designtitle="LuxurySkins || A cosmetic items website"
                    designimg={design12}
                    designlive=""
                    designbehance=""
                    designdribble=""
                    designcontent=""
                />
                </div>
               </div>
          
            </div>
        </div>
    )
}

export default tab2
