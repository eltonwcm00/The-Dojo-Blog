import { useState } from 'react';

const Create = () => {
    
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');

    const handleSubmit = (e) => {
        /* Prevent the page to reload when submit button is clicked */
        e.preventDefault();
        /* Create JSON object to take in the input and save into db.json */
        const blog = {title, body, author};

    }

    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={}>
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;