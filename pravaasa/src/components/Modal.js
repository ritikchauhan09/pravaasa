import { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Check localStorage to see if the modal has been shown before
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    if (!storedPhoneNumber) {
      // If no phone number is stored, show the modal
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      // Store the phone number in localStorage
      localStorage.setItem('phoneNumber', phoneNumber);
      // Close the modal
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
          <div className="flex justify-center items-center relative">
          <img src='/images/mobile.jpg' className="mx-auto w-72 h-72 rounded-full object-cover" />

  <button
    onClick={closeModal}
    className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none"
  >
    &times;
  </button>
</div>
            <p className="mt-4 text-gray-700 text-lg font-medium text-center">
  Enter your phone number to stay connected with us and unlock exclusive updates.
</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 block mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
