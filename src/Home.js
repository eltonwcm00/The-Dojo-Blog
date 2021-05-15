import { useState } from 'react';

const Home = () => {
    
    {/* The hook takes 2 parameters = var, method name*/}
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }
    
    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>

            {/* Note : Never invoke function automatically, plain instead of ().
                Use anonymous function to pass function with parameter  #7*/}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;