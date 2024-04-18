import React, { useState, useEffect } from 'react';
import './styless.css';
function App() {
 
    const [count, setCount] = useState(() => {
     
      try {
        const storedCount = localStorage.getItem('myCounter');
        return storedCount ? parseInt(storedCount) : 0;
      } catch (error) {
       
        return 0;
      }
    });
  
    useEffect(() => {
      // Update local storage on count change
      localStorage.setItem('myCounter', count);
    }, [count]);
  
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => Math.max(0, prevCount - 1)); 
  
  return ( 
 
  
              <div>
                <p className="counter">{count}</p>
                <button className="my-button" onClick={increment}>Increment</button>
                <button className="my-button" onClick={decrement}>Decrement</button>
              </div> 
               )}; 
export default App;
