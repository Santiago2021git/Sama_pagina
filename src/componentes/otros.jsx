import React, { useState } from "react";

const initialImages = [
  "/otros/1.jpg", "/otros/2.jpg", "/otros/3.jpg", "/otros/4.jpg",
  "/otros/5.jpg", "/otros/6.jpg", "/otros/7.jpg", "/otros/8.jpg",
  "/otros/9.jpg", "/otros/10.jpg", "/otros/11.jpg", "/otros/12.jpg",
  "/otros/13.jpg", "/otros/14.jpg", "/otros/15.jpg", "/otros/16.jpg",
  "/otros/17.jpg", "/otros/18.jpg", "/otros/19.jpg", "/otros/20.jpg"
];

function Section4() {
  const [images, setImages] = useState(initialImages);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImagePaths = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImagePaths]);
  };

  return (
    <div className="bg-black font-sans min-h-screen">
      <div className="container mx-auto text-center mt-8 px-4">
        <h1 className="text-white text-3xl mb-6">Otros</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-[200px] h-[280px] rounded-lg overflow-hidden shadow-lg border-4 border-transparent hover:border-white hover:shadow-white hover:scale-105 transition-transform duration-300"
            >
              <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" id="otherImageUpload" />
          <label htmlFor="otherImageUpload" className="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
            Agregar Imágenes
          </label>
        </div>
      </div>
    </div>
  );
}

export default Section4;

