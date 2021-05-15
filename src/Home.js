const Home = () => {
    
    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    
    return(
        <div className="home">
            <h2>Homepage</h2>
            
            {/* Never invoke function automatically, plain instead of ().
                Use anonymous function to pass function with parameter  #7*/}

            <button onClick={() => handleClickAgain('mario')}>Click Me</button>
        </div>
    );
}

export default Home;