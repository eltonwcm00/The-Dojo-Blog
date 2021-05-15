const BlogList = (props) => {

    const blogs = props.blogs_passing;
    const title = props.title_passing;
    const handleDelete = props.delete_passing;

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
               </div>
           ))}
        </div>
    );
}

export default BlogList;