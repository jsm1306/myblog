import { useState } from 'react'
const Home = () => {
    const [blogs,setBlogs]=useState([
    {title:"My Blog1", body:"Body of Blog1", author:"Ramu"},
    {title:"My Blog2", body:"Body of Blog2", author:"Raju"},
    {title:"My Blog3", body:"Body of Blog3", author:"Tom"}
    ]);
    return (
    <div className="home">
    {blogs.map((blog) => (
    <div className="blog-preview">
    <h2>{blog.title}</h2>
    <p>Written by: {blog.author}</p>
    </div>
    ))
    }
    </div>
    );
   }
   export default Home;
   