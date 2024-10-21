import React, { useEffect, useMemo, useState } from "react";
import ItemList from "./ItemList";

const Memoization = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(30);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Updating data after filtering titles containing "eum"
  const filterData = () => {
    const update = data.filter((el) => {
      return el.title.split(" ").includes("eum");
    });
    setData(update);
  };

  // Expensive Fibonacci calculation
  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  // Memoized Fibonacci calculation to avoid re-calculation
  const memoizedFibonacci = useMemo(() => calculateFibonacci(result), [result]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Filter Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={filterData}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Filter Titles Containing "eum"
        </button>
      </div>

      {/* ItemList Data */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <ItemList data={data} />
      </div>

      {/* Fibonacci Section */}
      <div className="mt-10 max-w-xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Fibonacci Calculation
        </h2>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setResult((prev) => prev - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            disabled={result <= 1}
          >
            -1
          </button>
          <span className="text-2xl font-semibold">{result}</span>
          <button
            onClick={() => setResult((prev) => prev + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            +1
          </button>
        </div>

        {/* Display Memoized Fibonacci Result */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner text-lg font-medium text-gray-700">
          Fibonacci of {result}: {memoizedFibonacci}
        </div>
      </div>
    </div>
  );
};

export default Memoization;
