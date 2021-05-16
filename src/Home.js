import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    /* Use Props (pass data from parents to its child) */
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /* useEffect will run everytime re-render of the component */
    /* useEffect dependencies [] is to ensure this function() will be re-render only when a condition is met */
    /* Fetch JSON data from the endpoint and update the state*/
    useEffect(() => {
       setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data for the result');
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
       }, 1000);
    }, []);

    return(
        <div className="home">
          {/* Conditional templating (&&), blogs do existing, render only when it got the data */}
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs_passing={blogs} title_passing="All Blogs"/>}
        </div>
    );
}

export default Home;