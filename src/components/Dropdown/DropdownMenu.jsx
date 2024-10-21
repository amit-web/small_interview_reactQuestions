import React, { useEffect, useState, useRef } from "react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("Select an Option");
  const dropdownRef = useRef(null); // useRef to track the dropdown

  const handleSelect = () => {
    setOpen(!open);
  };

  const handleSelectValue = (value) => {
    setOption(value);
    setOpen(false);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-3xl font-bold text-white mb-8">Dropdown Menu</h1>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={handleSelect}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          {option}
        </button>

        {open && (
          <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
            <ul className="py-1 text-gray-700">
              <li
                onClick={() => handleSelectValue("Amit")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Amit
              </li>
              <li
                onClick={() => handleSelectValue("Sunny")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Sunny
              </li>
              <li
                onClick={() => handleSelectValue("Radha Rani")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Radha Rani
              </li>
              <li
                onClick={() => handleSelectValue("Kanha")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Kanha
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
