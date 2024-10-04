// src/App.js
import React, { useState } from 'react';
import './App.css';
import ImageDropzone from './ImageDropzone';
import PredictionBar from './PredictionBar';

function App() {
  const [predictions, setPredictions] = useState(null);

  const handlePredictions = (predictedData) => {
    setPredictions(predictedData);
  };

  return (
    <div className="App">
      <h1>Retinal Disease Prediction</h1>
      <ImageDropzone onPredictions={handlePredictions} />
      {predictions && <PredictionBar predictions={predictions} />}
    </div>
  );
}

export default App;
