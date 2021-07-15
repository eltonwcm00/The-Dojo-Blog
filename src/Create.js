import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    const[isPending, setIsPending] = useState(false);
    const redirectUser = useHistory();
  
    const handleSubmit = (e) => {

            /* Prevent the page to reload when submit button is clicked */
            e.preventDefault();
            /* Create JSON object to take in the input and save into db.json */
            const blog = {title, body, author};
            setIsPending(true);
            /* Making POST request */ 
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('New blog is added');
                setIsPending(false);
                /* redirectUser.go(-1); -1 = back to the prev page, 1 = foward to a page 
                   push to the specific route */
                redirectUser.push('/');
            })
    }

    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                {/* Two way binding : onChange will then change the title when try to change the input field value
                    use (event) e.target.value to track the value */}
                <input type="text" 
                    required 
                    value ={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea 
                    required
                    value ={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;