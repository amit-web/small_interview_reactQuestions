// Fetch Data from an API
// Fetch data from a public API (e.g., posts from JSONPlaceholder) and display it in a list.
// Handle loading and error states while fetching the data.
// Practice Focus: useEffect, API calls, error handling, conditional rendering.

import  { useEffect, useState } from "react";
import ShowingData from "./ShowingData";

const FetcchApi = () => {
  const [data, setData] = useState([]);
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
  //updating data after filtering havie title eum

  const filterData = () => {
    const update = data.filter((el) => {
      return el.title.split(" ").includes("eum");
    });
    setData(update);
  };

  // if(data===null) <div>Loading....</div>
  return (
    data && (
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-center mb-6">
          <button
            onClick={filterData}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Filter Titles Containing eum
          </button>
        </div>
        <ShowingData data={data} />
      </div>
    )
  );
};

export default FetcchApi;
