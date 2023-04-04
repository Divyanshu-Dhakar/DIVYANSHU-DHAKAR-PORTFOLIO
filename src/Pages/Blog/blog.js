import React from 'react'
import './blog.css'
import Blogcard from '../../Components/blogcard/blogcard';
const blog = () => {
  return (
    <div>
        <div className='head' id="blog"> <h1>Blogs</h1></div>
        <div className='blog-row'>

      <Blogcard 
      blogtitle="Methods for generating income using Artificial Intelligence."
      blogcontent="There are many ways to make money with AI, such as using chatbots for leads, financial prediction models, creating content, improving e-commerce, and investing with AI and machine learning algorithms. Let’s have a look inside the blog. "
    bloglink="https://codeomit.com/blogs/Generating-Income-through-AI"
      />
       <Blogcard 
      blogtitle="Techniques and Procedures for SEO Optimization"
      blogcontent="Want to stand out in the digital age? Simply having a website isn't enough. You need to ensure it's optimized for search engines or it's pointless. In this blog post, we'll go over some techniques and procedures to improve your SEO and attract more visitors to your site. "
    bloglink="https://codeomit.com/blogs/Techniques-and-Procedures-for-SEO-Optimization"
      />
       <Blogcard 
      blogtitle="Shopify: A Comprehensive Guide"
      blogcontent="Shopify is a popular e-commerce platform that enables users to effortlessly create and manage their own online stores. In this blog, we will discuss the positive and negative aspects of Shopify and how one can learn to use it."
    bloglink="https://codeomit.com/blogs/Shopify-Guide"
      />
      </div>
    </div>
  )
}

export default blog
