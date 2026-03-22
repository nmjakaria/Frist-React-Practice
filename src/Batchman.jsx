import React, { useState } from 'react';

export default function Batchman() {
    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        setRuns(runs + 1);
    }
    const handleDouble = () => {
        setRuns(runs + 2);
    }
    const handleTriple = () => {
        setRuns(runs + 3);
    }
    const handleFour = () => {
        setRuns(runs + 4);
    }
    const handleSixes = () => {
        setRuns(runs + 6);
    }

    return (
        <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', margin: '10px' }}>
            <h3>Bangladeshi Batsman</h3>
            <h2>Total Runs: {runs}</h2>
            
            <button onClick={handleSingle} style={btnStyle}>Single (1)</button>
            <button onClick={handleDouble} style={btnStyle}>Double (2)</button>
            <button onClick={handleTriple} style={btnStyle}>Triple (3)</button>
            <button onClick={handleFour} style={btnStyle}>Four (4)</button>
            <button onClick={handleSixes} style={btnStyle}>Six (6)</button>
            
            <button onClick={() => setRuns(0)} style={{...btnStyle, backgroundColor: 'red', color: 'white'}}>Out / Reset</button>
        </div>
    )
}

const btnStyle = {
    margin: '5px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
};