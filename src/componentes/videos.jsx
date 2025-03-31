import React, { useState } from "react";

const initialVideos = [
  "/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4", 
  "/videos/4.mp4", "/videos/5.mp4", "/videos/6.mp4"
];

function Section2() {
  const [videos, setVideos] = useState(initialVideos);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newVideoPaths = files.map((file) => URL.createObjectURL(file));
    setVideos((prev) => [...prev, ...newVideoPaths]);
  };

  return (
    <div className="bg-black font-sans min-h-screen">
      <div className="container mx-auto text-center mt-8 px-4">
        <h1 className="text-white text-3xl mb-6">Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((src, index) => (
            <div 
              key={index} 
              className="w-full max-w-xs aspect-[9/16] rounded-lg overflow-hidden shadow-lg border-4 border-transparent hover:border-white hover:shadow-white hover:scale-105 transition-all duration-300"
            >
              <video controls className="w-full h-full object-cover rounded-lg">
                <source src={src} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <input type="file" multiple accept="video/*" onChange={handleUpload} className="hidden" id="videoUpload" />
          <label htmlFor="videoUpload" className="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
            Agregar Videos
          </label>
        </div>
      </div>
    </div>
  );
}

export default Section2;
