// src/ImageDropzone.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = () => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const imagePreviews = acceptedFiles.map((file) => ({
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prevImages) => prevImages.concat(imagePreviews));
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
