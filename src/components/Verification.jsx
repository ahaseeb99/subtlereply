import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuccessModal from './SuccessModal'; 
import axios from "axios";

const AccountVerification = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/request-verify-token",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 202) {
        setShowSuccessModal(true)
        setMessage("Email sent. Please check your inbox to verify your account.");

      } else {
        setIsError(true);
        setMessage("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      console.log(err)
      if (err.response) {
        const message = err.response.status === 401 ? "Invalid login credentials." :
                        err.response.status === 403 ? "Access denied." :
                        err.response.status === 500 ? "Server error, please try again later." :
                        "Failed to login, please check your credentials.";
        setError(err.response.data.detail || message);
      } else {
        setError("Failed to connect to the service, please try again later.");
      }
  }
   finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center">
      <div className="bg-custom bg-opacity-80 p-8 rounded-2xl shadow-2xl w-4/5 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Account <span className="text-purple-500">Verification</span>
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <InputField
            type="email"
            placeholder="Enter your email"
            label="Email"
            iconPath="M7 6.5H20C20.7956 6.5 21.5587 6.81607 22.1213 7.37868C22.6839 7.94129 23 8.70435 23 9.5V18.5C23 19.2956 22.6839 20.0587 22.1213 20.6213C21.5587 21.1839 20.7956 21.5 20 21.5H7C6.20435 21.5 5.44129 21.1839 4.87868 20.6213C4.31607 20.0587 4 19.2956 4 18.5V9.5C4 8.70435 4.31607 7.94129 4.87868 7.37868C5.44129 6.81607 6.20435 6.5 7 6.5ZM7 7.5C6.5 7.5 6.06 7.67 5.72 7.97L13.5 13L21.28 7.97C20.94 7.67 20.5 7.5 20 7.5H7ZM13.5 14.21L5.13 8.78C5.05 9 5 9.25 5 9.5V18.5C5 19.0304 5.21071 19.5391 5.58579 19.9142C5.96086 20.2893 6.46957 20.5 7 20.5H20C20.5304 20.5 21.0391 20.2893 21.4142 19.9142C21.7893 19.5391 22 19.0304 22 18.5V9.5C22 9.25 21.95 9 21.87 8.78L13.5 14.21Z"

            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
            <div className="text-left">
            {error && (
              <div className="text-red-500 text-center mt-2">{error}</div>
            )}
          </div>
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-purple-700 to-pink-700 text-white font-bold py-3 rounded-xl hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition duration-300 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Verify Account"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Verify Account'}
          </button>
        </form>
        {message && <p className={`text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
      

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already verified your account?{" "}
            <Link
              to="/login"
              className="text-white hover:underline hover:text-purple-500"
            >
              Login
            </Link>
          </p>
        </div>

        {showSuccessModal  && <SuccessModal message="Email sent. Please check your email to verify your account."   url="/login"   />}

      </div>
    </div>
  );
};

const InputField = ({ type, placeholder, iconPath, label, value, onChange, disabled }) => {
  return (
    <div className="relative space-y-2">
      <label
        htmlFor={label}
        className="absolute left-0 -top-5 px-1 text-sm text-white"
      >
        {label}
      </label>
      <input
        id={label}
        name={label}
        type={type}
        className="w-full pl-14 pr- py-4 bg-white text-black placeholder-gray-500 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg sm:pl-12 sm:pr-15 md:pl-6 md:pr-4 lg:pl-12 lg:pr-10 lg:py-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconPath} fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default AccountVerification;
