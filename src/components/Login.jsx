import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const InputField = ({
  type,
  placeholder,
  iconPath,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="relative space-y-2">
      <label
        htmlFor={label}
        className="absolute left-0 -top-5 px-1 text-white text-xs sm:text-sm" 
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        className="w-full pl-14 pr- py-4 bg-white text-black placeholder-gray-500 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg sm:pl-12 sm:pr-15 md:pl-6 md:pr-4 lg:pl-12 lg:pr-10 lg:py-4"
        placeholder={placeholder}
        required
        aria-label={label}
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconPath} fill="black" />
        </svg>
      </div>
    </div>
  );
};

const handleGoogleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/google/authorize"
    );

    if (!response.ok) {
      throw new Error("Failed to retrieve the authorization URL.");
    }

    const data = await response.json();

    if (data.authorization_url) {
      console.log(data.authorization_url);
      window.location.href = data.authorization_url;
    } else {
      console.log("Failed to retrieve the authorization URL.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);
    setFormSubmitting(true);

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      setFormSubmitting(false);
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      setFormSubmitting(false);
      return;
    }

    const formData = new URLSearchParams();
    formData.append("username", email.trim());
    formData.append("password", password);

    try {
      const response = await axios({
        method: "post",
        url: "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/jwt/login",
        data: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.status === 200 && response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        setError("");
        navigate("/profile");
      } else {
        setError(response.data.msg || "Authentication failed.");
        if (!response.data.access_token) {
          throw new Error("Token not received");
        }
      }
    } catch (err) {
      if (err.response) {
        const message =
          err.response.status === 401
            ? "Invalid login credentials."
            : err.response.status === 403
            ? "Access denied."
            : err.response.status === 500
            ? "Server error, please try again later."
            : "Failed to login, please check your credentials.";
        setError(err.response.data.detail || message);
      } else {
        setError("Failed to connect to the service, please try again later.");
      }
    } finally {
      setFormSubmitting(false);
      setIsLoading(false);

    }
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center">
      <div className="bg-custom bg-opacity-80 p-8 rounded-2xl shadow-2xl w-4/5 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Log <span className="text-purple-500">in</span>
        </h2>
        <form onSubmit={handleLogin} className="space-y-8" noValidate>
          <InputField
            type="email"
            placeholder="yourname@gmail.com"
            iconPath="M7 6.5H20C20.7956 6.5 21.5587 6.81607 22.1213 7.37868C22.6839 7.94129 23 8.70435 23 9.5V18.5C23 19.2956 22.6839 20.0587 22.1213 20.6213C21.5587 21.1839 20.7956 21.5 20 21.5H7C6.20435 21.5 5.44129 21.1839 4.87868 20.6213C4.31607 20.0587 4 19.2956 4 18.5V9.5C4 8.70435 4.31607 7.94129 4.87868 7.37868C5.44129 6.81607 6.20435 6.5 7 6.5ZM7 7.5C6.5 7.5 6.06 7.67 5.72 7.97L13.5 13L21.28 7.97C20.94 7.67 20.5 7.5 20 7.5H7ZM13.5 14.21L5.13 8.78C5.05 9 5 9.25 5 9.5V18.5C5 19.0304 5.21071 19.5391 5.58579 19.9142C5.96086 20.2893 6.46957 20.5 7 20.5H20C20.5304 20.5 21.0391 20.2893 21.4142 19.9142C21.7893 19.5391 22 19.0304 22 18.5V9.5C22 9.25 21.95 9 21.87 8.78L13.5 14.21Z"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            iconPath="M22.3901 6.70914L23.0398 6.06857C23.2122 5.89625 23.309 5.66254 23.309 5.41884C23.309 5.17515 23.2122 4.94144 23.0398 4.76912C22.8675 4.59681 22.6338 4.5 22.3901 4.5C22.1464 4.5 21.9127 4.59681 21.7404 4.76912L20.4593 6.05942L17.8695 8.64915L12.0952 14.4143C11.1491 13.79 10.0049 13.5392 8.88431 13.7105C7.76377 13.8817 6.74668 14.4628 6.03013 15.3411C5.31358 16.2195 4.94857 17.3325 5.00585 18.4646C5.06312 19.5968 5.5386 20.6673 6.34014 21.4688C7.14168 22.2704 8.21222 22.7458 9.34432 22.8031C10.4764 22.8604 11.5895 22.4954 12.4678 21.7788C13.3462 21.0623 13.9273 20.0452 14.0985 18.9247C14.2697 17.8041 14.0189 16.6599 13.3947 15.7137L18.5101 10.5892L20.4501 12.5383C20.5354 12.623 20.6366 12.6901 20.7479 12.7358C20.8591 12.7814 20.9783 12.8046 21.0985 12.8042C21.2187 12.8038 21.3377 12.7797 21.4486 12.7333C21.5596 12.6869 21.6603 12.6191 21.745 12.5338C21.8297 12.4484 21.8968 12.3473 21.9424 12.236C21.988 12.1248 22.0113 12.0056 22.0109 11.8854C22.0104 11.7651 21.9863 11.6462 21.9399 11.5352C21.8935 11.4243 21.8257 11.3236 21.7404 11.2389L19.8004 9.29887L21.0998 8.00858L21.7404 8.64915C21.8251 8.73447 21.9258 8.80227 22.0367 8.84868C22.1477 8.89508 22.2666 8.91919 22.3869 8.91961C22.5071 8.92004 22.6263 8.89678 22.7375 8.85115C22.8488 8.80553 22.9499 8.73845 23.0353 8.65372C23.1206 8.569 23.1884 8.46831 23.2348 8.35738C23.2812 8.24646 23.3053 8.12748 23.3057 8.00724C23.3062 7.887 23.2829 7.76785 23.2373 7.6566C23.1917 7.54535 23.1246 7.44418 23.0398 7.35886L22.3901 6.70914ZM9.57872 20.9756C9.03575 20.9756 8.50497 20.8145 8.05351 20.5129C7.60205 20.2112 7.25018 19.7825 7.04239 19.2808C6.83461 18.7792 6.78024 18.2272 6.88617 17.6947C6.9921 17.1621 7.25356 16.673 7.6375 16.289C8.02143 15.9051 8.5106 15.6436 9.04314 15.5377C9.57567 15.4318 10.1277 15.4861 10.6293 15.6939C11.1309 15.9017 11.5597 16.2536 11.8614 16.705C12.163 17.1565 12.324 17.6873 12.324 18.2303C12.324 18.9584 12.0348 19.6566 11.5199 20.1715C11.0051 20.6863 10.3068 20.9756 9.57872 20.9756Z"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-left">
            {error && (
              <div className="text-red-500 text-center mt-2">{error}</div>
            )}
          </div>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-white hover:underline hover:text-purple-500"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-pink-700 text-white font-bold py-3 rounded-xl hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition duration-300 ease-in-out"
            aria-label="Log in"
            disabled={isLoading}

          >
                        {isLoading ? 'Sending...' : 'Log in'}

          </button>

          {/* Separation Line - Optional */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute left-0 right-0 border-t border-gray-400"
              style={{ top: "0.5rem" }}
            />
            <span className="relative bg-custom px-4 text-gray-400">
              or continue with
            </span>
          </div>

          <button
            className="w-full flex items-center justify-center  text-black font-bold py-2 px-4 rounded-xl  hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition duration-300 ease-in-out"
            aria-label="Log in with Google"
            onClick={handleGoogleLogin}
          >
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.2469 21.4709H39.8586V21.3994H24.3467V28.2936H34.0873C32.6663 32.3068 28.8478 35.1877 24.3467 35.1877C18.6358 35.1877 14.0055 30.5574 14.0055 24.8465C14.0055 19.1355 18.6358 14.5052 24.3467 14.5052C26.9829 14.5052 29.3812 15.4997 31.2073 17.1242L36.0823 12.2491C33.0041 9.3803 28.8865 7.61108 24.3467 7.61108C14.8285 7.61108 7.11133 15.3282 7.11133 24.8465C7.11133 34.3647 14.8285 42.0819 24.3467 42.0819C33.865 42.0819 41.5821 34.3647 41.5821 24.8465C41.5821 23.6908 41.4632 22.5628 41.2469 21.4709Z"
                fill="#FFC107"
              />
              <path
                d="M24.3472 42.0816C28.7991 42.0816 32.8443 40.3779 35.9027 37.6073L30.5683 33.0934C28.7798 34.4536 26.5943 35.1892 24.3472 35.1875C19.8643 35.1875 16.0579 32.329 14.6239 28.3398L9.00342 32.6702C11.8559 38.2519 17.6487 42.0816 24.3472 42.0816Z"
                fill="#4CAF50"
              />
              <path
                d="M41.2473 21.4713H39.859V21.3998H24.3472V28.2939H34.0878C33.408 30.204 32.1835 31.873 30.5657 33.0949L30.5683 33.0931L35.9026 37.6071C35.5252 37.9501 41.5826 33.4646 41.5826 24.8469C41.5826 23.6912 41.4636 22.5632 41.2473 21.4713Z"
                fill="#1976D2"
              />
              <path
                d="M9.09912 16.8243L14.7618 20.9771C16.294 17.1836 20.0048 14.5052 24.3473 14.5052C26.9834 14.5052 29.3817 15.4997 31.2078 17.1242L36.0829 12.2491C33.0046 9.3803 28.8871 7.61108 24.3473 7.61108C17.7272 7.61108 11.9861 11.3486 9.09912 16.8243Z"
                fill="#FF3D00"
              />
            </svg>
          </button>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-white hover:underline hover:text-purple-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
