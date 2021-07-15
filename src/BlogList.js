import { Link } from "react-router-dom";

// It's parents is Home.js
// To receive from its parents = 'props'
const BlogList = ( {data, title} ) => {

    // const blogs = props.blogs_passing;
    // const title = props.title_passing;

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {data.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
               </div>
           ))}
        </div>
    );
}

export default BlogList;