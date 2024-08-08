import React from 'react';

function ResultDisplay({ result }) {
    return (
        <div>
            {result ? <h2>Prediction: {result}</h2> : <h2>No result yet.</h2>}
        </div>
    );
}

export default ResultDisplay;
