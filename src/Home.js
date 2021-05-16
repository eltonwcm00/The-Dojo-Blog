import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    /* Use Props (pass data from parents to its child) */
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    /* useEffect will run everytime re-render of the component */
    /* useEffect dependencies [] is to ensure this function() will be re-render only when a condition is met */
    /* Fetch JSON data from the endpoint and  update the state*/
    useEffect(() => {
       setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });
       }, 1000);
    }, []);


    return(
        <div className="home">
          {/* Conditional templating (&&), blogs do existing, render only when it got the data */}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs_passing={blogs} title_passing="All Blogs"/>}
        </div>
    );
}

export default Home;