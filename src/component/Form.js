import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() === '') {
      setError('Input cannot be empty');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setError('');
    console.log('Input Value:', inputValue);
    setInputValue('');
    // inputRef.current.focus();
  };

  return (
    <div className='form-container'>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type='text' placeholder='Tyep here...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      {error && <p className='error-message'>{error}</p>}
    </div>
  );
}

export default Form;
