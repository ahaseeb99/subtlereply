import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ errorCode = "404", message = "Page Not Found", description = "The page you're looking for doesn't exist or has been moved." }) => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-4/5 max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-purple-500 mb-4">{errorCode}</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-8">{message}</p>
        <p className="text-gray-600 mb-12">{description}</p>
        <Link to="/" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
