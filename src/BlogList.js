const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const author = props.author;
    const handleDelete = props.handleDelete;
    /*   <button onClick={()=>handleDelete(blog.author)}>Delete Blog</button>
    to delete all the authors.
*/
    return ( 
        <div className="BlogList">
            <h1>{title}</h1>
            <div className="home">
            
        <button onClick={()=>handleDelete(author)}>Delete Blog</button>

    {blogs.map((blog) => (
    <div className="blog-preview">
    <h2>{blog.title}</h2>
    <p>Written by: {blog.author}</p>
    </div>
    ))
    }
    </div>
        </div>
     );
}
 
export default BlogList;