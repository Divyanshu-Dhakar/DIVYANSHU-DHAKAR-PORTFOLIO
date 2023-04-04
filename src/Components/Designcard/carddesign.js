import React from 'react';
import"./carddesign.css";
export const carddesign = (
    {
        designtitle,
        designimg,
        designlive,
       designbehance,
       designdribble,
       designcontent

    }
) => {
  return (
    <div>
<div className="ui-card">
        <img src={designimg} />
        <h1>{designtitle}</h1>
        <div className="icons">
          <a href={designdribble}><i className="fa-sharp fa-solid fa-basketball" /></a>
          <a href={designbehance}><i className="fa-brands fa-behance" /></a>
          <a href={designcontent}><i className="fa-brands fa-github" /></a>
          <a href={designlive}><i className="fa-sharp fa-solid fa-eye" /></a>
        </div>
      </div>
    </div>
  )
}

export default carddesign
