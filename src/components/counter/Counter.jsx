// Create a Counter Component

// Implement a counter with increment and decrement functionality.
// Add a reset button to reset the counter.
// Use both class components and functional components (with hooks).
// Practice Focus: useState, event handling, conditional rendering.

import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Counter Application
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Counter: {count}
        </h2>

        <div className="flex space-x-4">
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={handleReset}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
