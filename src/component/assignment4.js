import React, { useEffect, useState } from 'react';
import '../App.css';

function Assignment4() {

  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
    //   setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
        const data = await response.json();
        setUserData(data);
        // setLoading(false);
      } catch (error) {
        setError(error);
        // setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  return (

    <div className='assignment4-container'>
      <h1 className='count-title'>Total Count {count}</h1>
      <div className='buttons-container'>
        <button className='action-button' onClick={incrementCount}>+</button>
        <button className='action-button' onClick={decrementCount}>-</button>
      </div>

      {/* {loading && <p className='loading-message'>Loading...</p>} */}
      {error && <p className='error-message'>Error: {error.message}</p>}


      {
      userData && (
        <div className='user-data-container'>
          <h2>User Data:</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
}



export default Assignment4;
