// src/ImageDropzone.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = ({ onPredictions }) => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const imagePreviews = acceptedFiles.map((file) => ({
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prevImages) => prevImages.concat(imagePreviews));

    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('file', file);
    });

    // Make the prediction request
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Call the onPredictions prop with the prediction data
        onPredictions(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop your retinal images here, or click to select files.</p>
      </div>
      <div className="image-preview">
        {images.map((image, index) => (
          <img key={index} src={image.preview} alt={image.name} />
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
