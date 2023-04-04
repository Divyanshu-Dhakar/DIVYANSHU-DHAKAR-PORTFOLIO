import React from 'react';
import"./blogcard.css";
export const blogcard = (
    {
        blogtitle,
        blogcontent,
      bloglink,
    }
) => {
  return (
    <div>
 <div className="blog-card">
        <h1>{blogtitle}</h1>
        <span>Posted on: <a href>Codeomit</a></span>
        <p>{blogcontent}</p>
        <button><a href={bloglink}>Read More -&gt;</a></button>
      </div>
    </div>
  )
}

export default blogcard
