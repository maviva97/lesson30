import React, { useState, useEffect } from 'react';
import './styless.css';
function App() {
 
    const [count, setCount] = useState(() => {
      // Get initial value from local storage (or default to 0)
      try {
        const storedCount = localStorage.getItem('myCounter');
        return storedCount ? parseInt(storedCount) : 0;
      } catch (error) {
        // Handle potential parsing errors
        return 0;
      }
    });
  
    useEffect(() => {
      // Update local storage on count change
      localStorage.setItem('myCounter', count);
    }, [count]); // Dependency array
  
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => Math.max(0, prevCount - 1)); // Ensure count doesn't go negative
  
  return ( 
 
  
              <div>
                <p className="counter">{count}</p>
                <button className="my-button" onClick={increment}>Increment</button>
                <button className="my-button" onClick={decrement}>Decrement</button>
              </div> 
               )}; 
export default App;
