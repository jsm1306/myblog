import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState([
    {title:"My Blog1", body:"Body of Blog1", author:"Ramu",id:1},
    {title:"My Blog2", body:"Body of Blog2", author:"Raju",id:2},
    {title:"My Blog3", body:"Body of Blog3", author:"Ramu",id:3},
    ]);
    const handleDelete = ()=>{
        const newblogs = blogs.filter(blog=>blog.author!=="Raju")
        setBlogs(newblogs)
    }
    return (
    <div className="Home">
        <BlogList blogs = {blogs} title = "Hello Sindhu" handleDelete={handleDelete}/>

    </div>
    );
   }
   export default Home;
   