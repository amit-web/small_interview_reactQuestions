import React, { useState } from 'react';
import Modal from './Modal';

const MainModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <button 
    
    onClick={handleOpen} 
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Open Modal
  </button>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h1 className="text-xl font-semibold mb-4">This is a Modal</h1>
        <p className="text-gray-700 mb-6">Here is some content inside the modal.</p>
    
        <button 
        onClick={handleClose} 
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
       
        Close Modal
      </button>

      </Modal>
    </div>
  );
};

export default MainModal;
