import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    /* Method 1: C/P this JSON into BlogList.js
       Method 2: Use Props (pass data from parents to its child) */

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return(
        <div className="home">
          {/*Pass data to its child component through Props*/}
          <BlogList blogs_passing={blogs} title_passing="All Blogs" />
          <BlogList blogs_passing=
            {
                blogs.filter((blog) => blog.author === 'mario')
            }
            title_passing="Mario's Blogs" />
        </div>
    );
}

export default Home;