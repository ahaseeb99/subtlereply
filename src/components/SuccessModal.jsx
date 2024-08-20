import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ message, url }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log('Continue clicked');
    if (url) {
      navigate(url);
    } else {
      console.error('No URL specified for continue button');
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-900 to-black flex items-center justify-center z-50">
      <div className="w-full h-full flex items-center justify-center p-6 bg-black bg-opacity-75">
        <div className="bg-custom rounded-lg shadow-xl text-center p-6 max-w-lg w-full">
          <div className="mb-4 p-4 bg-green-500 rounded-full inline-block shadow-lg">
            <svg
              className="text-white h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.293 9.293a1 1 0 011.414 0L9 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="mb-5 text-xl font-bold text-white">Success!</h3>
          <p className="text-gray-300 mb-8">{message}</p>
          <button
            onClick={handleContinue}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl"
          >
            Continue
          </button>
          {!url && (
            <p className="text-red-500 text-sm mt-4">
              No URL specified for continue button.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
