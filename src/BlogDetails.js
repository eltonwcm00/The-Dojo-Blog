import { useParams } from "react-router";


const BlogDetails = () => {

    /* useParams hook : Grab route parameters from the route 
       destructure the id (/:id) */
    const {id} = useParams();

    return(
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
    );
}

export default BlogDetails;