import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    /* useParams hook : Grab route parameters from the route 
       destructure the id (/:id) */
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)

    return(
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            <br/><br/>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2><br/>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;