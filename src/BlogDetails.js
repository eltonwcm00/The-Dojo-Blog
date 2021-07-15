import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {

    /* useParams hook : Grab route parameters from the route 
       destructure the id (/:id) */
    const { id } = useParams();

    // data: declare a reference local variable
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const redirectUser = useHistory();
    
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            redirectUser.push('/');
        });
    }

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
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;