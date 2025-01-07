const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title
    return ( 
        <div className="BlogList">
            <h1>{title}</h1>
            <div className="home">
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