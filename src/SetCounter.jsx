import { useState } from 'react'
import React from 'react';
function CounterComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(0); 
    };

    return (
        <div style={{ border: '2px solid purple', margin: '15px', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <h2>Simple Counter</h2>
            
            <h1 style={{ fontSize: '40px', margin: '10px 0' }}>{count}</h1>

            <button onClick={increment} style={buttonStyle}>Increase (+)</button>
            <button onClick={decrement} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Decrease (-)</button>
            <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#555555' }}>Reset</button>
        </div>
    );
}

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
};

export default CounterComponent;