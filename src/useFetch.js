import { useState, useEffect } from 'react';

/* Custom hook (one codebase to be reusable to different components) */
/* Must start with the word 'use' for creating a custom hook */

const useFetch = (url) => {

    /* Use Props (pass data from parents to its child) */
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    /* useEffect will run everytime re-render of the component */
    /* useEffect dependencies [] is to ensure this function() will be re-render only when a condition is met */
    /* Fetch JSON data from the endpoint and update the state*/
    
    useEffect(() => {

        /* Abort fetch when quickly jump around between component*/
        const abortContoller = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortContoller.signal})
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data for the result');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {

                    if(err.name == 'AbortError') {
                        console.log('Fetch is aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }  
                })
        }, 1000);

        return() => abortContoller.abort();

    }, [url]);

    /* Return value of custom hook to be used in the other component */ 
    return {data, isPending, error}
}

export default useFetch;