import { useState, useEffect } from "react";
import Image from "next/image";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the modal has been shown before
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
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
    const onlyNumbersPattern = /^\d+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (!onlyNumbersPattern.test(number)) {
      setLoading(false);
      return "Phone number should contain only digits.";
    }

    if (number.length !== 10) {
      setLoading(false);
      return "Phone number must be exactly 10 digits long.";
    }

    if (!phonePattern.test(number)) {
      setLoading(false);
      return "Phone number must start with a digit between 6 and 9.";
    }

    return "";
  };

  const api_url_add_num = new URL("/api/Save", process.env.NEXT_PUBLIC_WEBSITE_URL).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", api_url_add_num);
  
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    const validationError = validatePhoneNumber(phoneNumber);
  
    if (!validationError) {
      try {
        const response = await fetch(api_url_add_num, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ number: phoneNumber }),
        });
  
        if (!response.ok) {
          throw new Error(`Failed to save: ${response.statusText}`);
        }
  
        const result = await response.json();
        localStorage.setItem("phoneNumber", phoneNumber);
        setSuccessMessage("✅ Phone number saved successfully!");
        closeModal();
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage(error.message || "Something went wrong, please try again!");
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMessage(validationError);
      setLoading(false);
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-center items-center relative">
              <Image
                src="/images/mobile.jpg" // Make sure this path is correct and the file is in the public directory.
                alt="Mobile Image"
                width={288} // Base size for large screens (18rem = 72 Tailwind units)
                height={288}
                className="rounded-full object-cover w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72"
                // style={{ width: 'auto', height: 'auto' }} // Ensures responsiveness
                priority // Optimizes image for loading
              />

              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
              >
                &times;
              </button>
            </div>
            <p className="mt-4 text-gray-700 text-lg font-medium text-center">
              Enter your phone number to stay connected with us and unlock
              exclusive updates.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setErrorMessage(""); // Clear error message on input change
                }}
                className={`border p-2 rounded w-full mb-4 ${errorMessage ? "border-red-500" : "border-gray-300"
                  }`}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
              <button
                type="submit" id="submit_form" disabled={loading}
                className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 block mx-auto"
              >
                {loading ? (
                  <div className="spinner-border animate-spin border-4 rounded-full border-t-transparent w-6 h-6"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
            {successMessage && (
              <p className="text-green-500 text-sm mt-4 text-center">
                {successMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
