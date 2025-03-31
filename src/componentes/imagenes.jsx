import React, { useState } from "react";
import "./styles.css";

const initialImages = [
  "/Imagenes/1.jpg", "/Imagenes/2.jpg", "/Imagenes/3.jpg", "/Imagenes/4.jpg",
  "/Imagenes/5.jpg", "/Imagenes/6.jpg", "/Imagenes/7.jpg", "/Imagenes/8.jpg",
  "/Imagenes/9.jpg", "/Imagenes/10.jpg"
];

const initialBackImages = [
  "/Imagenes/11.jpg", "/Imagenes/12.jpg", "/Imagenes/13.jpg", "/Imagenes/14.jpg",
  "/Imagenes/15.jpg", "/Imagenes/16.jpg", "/Imagenes/17.jpg", "/Imagenes/18.jpg",
  "/Imagenes/19.jpg", "/Imagenes/20.jpg"
];

function Section1() {
  const [images, setImages] = useState(initialImages);
  const [backImages, setBackImages] = useState(initialBackImages);
  const [flipped, setFlipped] = useState(Array(initialImages.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImagePaths = files.map((file, index) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImagePaths]);
    setBackImages((prev) => [...prev, ...newImagePaths]);
    setFlipped((prev) => [...prev, ...Array(newImagePaths.length).fill(false)]);
  };

  return (
    <div className="bg-black font-sans text-white min-h-screen">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl font-bold mb-8 tracking-wide text-indigo-400 drop-shadow-lg animate-pulse">Fotos</h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center pb-6">
              <div className={`flip-card ${flipped[index] ? "flipped" : ""}`} onClick={() => handleFlip(index)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={src} alt={`Foto ${index + 1}`} />
                  </div>
                  <div className="flip-card-back">
                    <img src={backImages[index] || src} alt={`Foto trasera ${index + 1}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" id="fileUpload" />
          <label htmlFor="fileUpload" className="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
            Agregar Fotos
          </label>
        </div>
      </div>
    </div>
  );
}

export default Section1;

