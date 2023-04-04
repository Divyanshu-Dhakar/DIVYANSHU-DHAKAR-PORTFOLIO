import React from 'react';
import"./cardproject.css";
export const projectcard = (
    {
        imgsrc,
        title,
        content,
        tags,
        livelink,
        gitlink
    }
) => {
  return (
    <div>
      <div className="project-card">
        <div className="project-img">
          <img src={imgsrc} />
        </div>
        <div className="project-content">
          <h1>{title}</h1>
          <p>{content}</p>
          <span>{tags}</span>
        </div>
        <div className="buttons"><button><a href={livelink}><h3>Live Demo</h3></a></button>
          <button><a  href={gitlink }><h3>Github</h3></a></button></div>
      </div>
    </div>
  )
}

export default projectcard
