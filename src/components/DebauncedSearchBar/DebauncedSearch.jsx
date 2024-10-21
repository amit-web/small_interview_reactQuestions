import React, { useEffect, useState } from "react";

const DebauncedSearch = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchData, setSearhData] = useState([]);
  useEffect(() => {
    //calling the api but we are;
    let timed = setTimeout(() => {
      serahData();
    }, 300);

    return () => {
      clearTimeout(timed);
    };
  }, [searchKey]);

  const serahData = async () => {
    try {
      const response = await fetch(
        `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchKey}`
      );

      if (!response.ok) {
        console.error("Failed to fetch data");
        return;
      }

      const data = await response.json();
      console.log(data[1]);
      setSearhData(data[1]);
      console.log(searchData, "mainData");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">
      Creating Debounced Search Bar
    </h1>
    <div className="mb-4">
      <input
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search for a movie..."
      />
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">Showing Search Results:</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {searchData.length > 0 ? (
          searchData.map((el, index) => (
            <div key={index} className="border-b last:border-b-0 py-2">
              <p className="text-gray-700">{el}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default DebauncedSearch;
