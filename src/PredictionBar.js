// src/PredictionBar.js
import React from 'react';
import './PredictionBar.css';

const PredictionBar = ({ predictions }) => {
    return (
        <div className="prediction-container">
            {Object.entries(predictions).map(([label, value]) => (
                <div className="prediction-bar" key={label}>
                    <div className="label">{label}</div>
                    <div className="bar-container">
                        <div
                            className="bar"
                            style={{ width: `${value}%` }}
                        >
                            <span 
                                className={`percentage ${label == 'dme-percentage'}`}
                            >
                                {value.toFixed(3)}%
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PredictionBar;
