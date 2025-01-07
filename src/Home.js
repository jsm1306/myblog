import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState([
    {title:"My Blog1", body:"Body of Blog1", author:"Ramu"},
    {title:"My Blog2", body:"Body of Blog2", author:"Raju"},
    {title:"My Blog3", body:"Body of Blog3", author:"Ramu"}
    ]);
    return (
    <div className="Home">
        <BlogList blogs = {blogs} title = "Hello Sindhu"/>
        <BlogList blogs = {blogs.filter((blog)=>blog.author==='Ramu')} title = "Hello Ramu Author"/>
    </div>
    );
   }
   export default Home;
   