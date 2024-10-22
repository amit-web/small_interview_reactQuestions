import React, { useEffect, useState } from "react";

const DynamicCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
    { id: 4, label: "Checkbox 4", checked: false },
  ]);

  const [allSelected, setAllSelected] = useState(false);

  const handleOnChange = (id) => {
    let updateCheck = checkboxes.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setCheckboxes(updateCheck);
  };

  useEffect(() => {
    const allChecked = checkboxes.every((el) => el.checked);
    setAllSelected(allChecked);
  }, [checkboxes]);

  const selectAll = () => {
    let toggleSelectAll = checkboxes.map((el) => ({
      ...el,
      checked: !allSelected, // Toggle based on the `allSelected` state
    }));
    setCheckboxes(toggleSelectAll);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Dynamic Checkbox
      </h1>

      <div className="space-y-4">
        {checkboxes.map((el) => (
          <label key={el.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 h-5 w-5"
              onChange={() => handleOnChange(el.id)}
              checked={el.checked}
            />
            <span className="text-lg text-gray-700">{el.label}</span>
          </label>
        ))}
      </div>

      <button
        disabled={allSelected && checkboxes.every((el) => el.checked)}
        onClick={selectAll}
        className={`mt-4 px-6 py-3 w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md transition 
              ${
                allSelected
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
      >
        {allSelected ? "Deselect All" : "Select All"}
      </button>

      <div className="pt-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Selected Checkboxes
        </h2>
        <ul className="list-disc list-inside mt-2">
          {checkboxes
            .filter((el) => el.checked)
            .map((el) => (
              <li key={el.id} className="text-gray-700">
                {el.label}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicCheckbox;
