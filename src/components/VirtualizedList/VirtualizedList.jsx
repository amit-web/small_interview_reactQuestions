import React from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 10000 }, (el, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div
    style={style}
    className={`list-item p-4 text-white bg-gray-800 odd:bg-gray-700 hover:bg-gray-600 rounded-md shadow-md transition-colors ease-in-out`}
  >
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <List
        className="border border-gray-600 rounded-lg shadow-lg"
        height={500} // Height of the entire list container
        itemCount={items.length} // Total number of items
        itemSize={50} // Height of each individual row
        width={350} // Width of the list
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
