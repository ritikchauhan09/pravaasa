import { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  // Validation function for phone number
  const validatePhoneNumber = (number) => {
    const onlyNumbersPattern = /^\d+$/; // Pattern for digits only
    const phonePattern = /^[6-9]\d{9}$/; // Indian phone number validation pattern

    // Check if the phone number contains only digits
    if (!onlyNumbersPattern.test(number)) {
      return 'Phone number should contain only digits.';
    }

    // Check if the length is exactly 10 digits
    if (number.length !== 10) {
      return 'Phone number must be exactly 10 digits long.';
    }

    // Check if the phone number starts with a valid digit (6-9)
    if (!phonePattern.test(number)) {
      return 'Phone number must start with a digit between 6 and 9.';
    }

    // If all validations pass, return an empty string (no error)
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePhoneNumber(phoneNumber);

    if (!validationError) {
      // Store the phone number in localStorage if valid
      localStorage.setItem('phoneNumber', phoneNumber);
      // Close the modal
      closeModal();
    } else {
      // Set the error message if validation fails
      setErrorMessage(validationError);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-center items-center relative">
              <img
                src='/images/mobile.jpg'
                className="mx-auto w-72 h-72 rounded-full object-cover"
              />

              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
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
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setErrorMessage(''); // Clear error message on input change
                }}
                className={`border p-2 rounded w-full mb-4 ${
                  errorMessage ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
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
