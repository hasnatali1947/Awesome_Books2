
import React, { useState } from 'react'
import { useEffect } from 'react';


const DataTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []);
    
      // Format the time as desired (e.g., HH:mm:ss)
      const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    
      // Format the date as MM/DD/YYYY
      const formattedDate = currentDateTime.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

  return (
        <>
            <span className='DateTime'>{formattedDate},{formattedTime}</span>
        </>
  )
}

export default DataTime

