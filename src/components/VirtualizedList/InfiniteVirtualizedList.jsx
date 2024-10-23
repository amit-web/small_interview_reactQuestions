import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Sample API providing 100 data points
const PAGE_SIZE = 20; // Number of items to load per scroll

const InfiniteScrollExample = () => {
  const [data, setData] = useState([]); // Holds the loaded data
  const [page, setPage] = useState(1); // Page number to keep track of loading batches
  const [loading, setLoading] = useState(false); // Loading state to show a loader when fetching data
  const [hasMore, setHasMore] = useState(true); // Flag to track if more data is available

  // Function to fetch data from the API
  const fetchData = async () => {
    if (loading) return; // Prevent multiple calls at once
    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}?_limit=${PAGE_SIZE}&_page=${page}`);
      const newData = await response.json();

      setData((prevData) => [...prevData, ...newData]); // Append new data to the existing data
      setPage((prevPage) => prevPage + 1); // Increment page count for next batch

      // If fewer items than PAGE_SIZE are fetched, we've reached the end
      if (newData.length < PAGE_SIZE) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Detect when the user scrolls to the bottom of the page
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10 && hasMore && !loading) {
      fetchData();
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Fetch initial data
    fetchData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures this runs only once (on component mount)

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Infinite Scroll Example</h1>

      <div className="grid grid-cols-1 gap-4">
        {data.map((item, index) => (
          <div key={`${item.id}-${index}`} className="p-4 bg-white shadow rounded-md">
            <h2 className="font-semibold text-xl">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center p-4">
          <p>Loading more data...</p>
        </div>
      )}

      {!hasMore && (
        <div className="text-center p-4">
          <p>No more data to load.</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollExample;
