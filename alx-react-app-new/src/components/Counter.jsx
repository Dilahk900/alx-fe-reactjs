import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f8ff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px auto',
      width: '300px'
    }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
