import React, { useState, useEffect } from 'react';
import "./Visitors.css"

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment the count when the component mounts
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div className='count'>
      <p>Total Visitors: {count}</p>

    </div>
    
  );
};

export default VisitorCounter;
