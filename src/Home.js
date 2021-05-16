import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    /* Import the object return back by the custom hook */
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

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