import React, { useState } from "react";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Developer working on a laptop
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Team collaborating in front of computers
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // Developer working on a whiteboard
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Code displayed on a monitor
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Developer workstation with multiple screens
    "https://images.unsplash.com/photo-1556155092-490a1ba16284"  // Developer hands typing on a keyboard
  ];
  
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Image Carousel</h1>
      
      <div className="relative w-full max-w-4xl">
        <img
          className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
          src={imageData[currentIndex]}
          alt="carousel"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 md:p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 md:p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Next
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {imageData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
