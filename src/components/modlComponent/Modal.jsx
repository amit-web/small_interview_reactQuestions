import React from 'react';

const Modal = ({ isOpen, handleClose, children }) => {
  return isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
