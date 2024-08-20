import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import SuccessModal from "./SuccessModal";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    width: "0%",
    backgroundColor: "#ddd",
    text: "",
  });
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [token, setToken] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    if (token) {
      setToken(token);
    } else {
      console.log("No token found in the URL.");
    }
  }, [location.search]);

  const updatePasswordStrength = (password) => {
    let strength = 0;
    let text = "";
    let backgroundColor = "#ddd";

    if (password.length > 5) strength++;
    if (password.match(/\d+/)) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    switch (strength) {
      case 1:
        text = "Weak";
        backgroundColor = "#ff3e36";
        break;
      case 2:
        text = "Fair";
        backgroundColor = "#ffae00";
        break;
      case 3:
        text = "Good";
        backgroundColor = "#2bdb66";
        break;
      case 4:
        text = "Strong";
        backgroundColor = "#25d366";
        break;
      default:
        text = "Too weak";
        backgroundColor = "#ddd";
    }

    setPasswordStrength({
      width: `${(strength / 4) * 100}%`,
      backgroundColor,
      text,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPass = e.target.value;
    setConfirmPassword(newConfirmPass);
    if (newConfirmPass !== password) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);



    
    
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);

      return;
    }


    if (password=='' ||  passwordStrength.text === "Too weak" ||
    passwordStrength.text === "Weak") {
      setError("Please choose a stronger password.");

      return;
    }

    try {
      const response = await axios.post(
        "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/reset-password",
        { token, password },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 202) {
        setShowSuccessModal(true)
        setMessage("Password has been reset successfully.");
        console.log("Password has been reset successfully.");
      } else {

        setIsError(true);
        setMessage("Failed to reset password.");
        console.error("Failed to reset password.");

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
          Reset <span className="text-purple-500">Password</span>
        </h2>
        {showSuccessModal && (
          <SuccessModal message="Congratulations, Password has been reset successfully." />
        )}
        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div className="relative space-y-2">
            <label
              htmlFor="password"
              className="absolute left-0 -top-5 px-1 text-sm text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full pl-14 pr- py-4 bg-white text-black placeholder-gray-500 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm md:text-base lg:text-lg sm:pl-12 sm:pr-15 md:pl-6 md:pr-4 lg:pl-12 lg:pr-10 lg:py-4"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => {
                const newPass = e.target.value;
                setPassword(newPass);
                updatePasswordStrength(newPass);
              }}
              disabled={isLoading}

            />
            <PasswordStrengthBar strength={passwordStrength} />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3901 6.70914L23.0398 6.06857C23.2122 5.89625 23.309 5.66254 23.309 5.41884C23.309 5.17515 23.2122 4.94144 23.0398 4.76912C22.8675 4.59681 22.6338 4.5 22.3901 4.5C22.1464 4.5 21.9127 4.59681 21.7404 4.76912L20.4593 6.05942L17.8695 8.64915L12.0952 14.4143C11.1491 13.79 10.0049 13.5392 8.88431 13.7105C7.76377 13.8817 6.74668 14.4628 6.03013 15.3411C5.31358 16.2195 4.94857 17.3325 5.00585 18.4646C5.06312 19.5968 5.5386 20.6673 6.34014 21.4688C7.14168 22.2704 8.21222 22.7458 9.34432 22.8031C10.4764 22.8604 11.5895 22.4954 12.4678 21.7788C13.3462 21.0623 13.9273 20.0452 14.0985 18.9247C14.2697 17.8041 14.0189 16.6599 13.3947 15.7137L18.5101 10.5892L20.4501 12.5383C20.5354 12.623 20.6366 12.6901 20.7479 12.7358C20.8591 12.7814 20.9783 12.8046 21.0985 12.8042C21.2187 12.8038 21.3377 12.7797 21.4486 12.7333C21.5596 12.6869 21.6603 12.6191 21.745 12.5338C21.8297 12.4484 21.8968 12.3473 21.9424 12.236C21.988 12.1248 22.0113 12.0056 22.0109 11.8854C22.0104 11.7651 21.9863 11.6462 21.9399 11.5352C21.8935 11.4243 21.8257 11.3236 21.7404 11.2389L19.8004 9.29887L21.0998 8.00858L21.7404 8.64915C21.8251 8.73447 21.9258 8.80227 22.0367 8.84868C22.1477 8.89508 22.2666 8.91919 22.3869 8.91961C22.5071 8.92004 22.6263 8.89678 22.7375 8.85115C22.8488 8.80553 22.9499 8.73845 23.0353 8.65372C23.1206 8.569 23.1884 8.46831 23.2348 8.35738C23.2812 8.24646 23.3053 8.12748 23.3057 8.00724C23.3062 7.887 23.2829 7.76785 23.2373 7.6566C23.1917 7.54535 23.1246 7.44418 23.0398 7.35886L22.3901 6.70914ZM9.57872 20.9756C9.03575 20.9756 8.50497 20.8145 8.05351 20.5129C7.60205 20.2112 7.25018 19.7825 7.04239 19.2808C6.83461 18.7792 6.78024 18.2272 6.88617 17.6947C6.9921 17.1621 7.25356 16.673 7.6375 16.289C8.02143 15.9051 8.5106 15.6436 9.04314 15.5377C9.57567 15.4318 10.1277 15.4861 10.6293 15.6939C11.1309 15.9017 11.5597 16.2536 11.8614 16.705C12.163 17.1565 12.324 17.6873 12.324 18.2303C12.324 18.9584 12.0348 19.6566 11.5199 20.1715C11.0051 20.6863 10.3068 20.9756 9.57872 20.9756Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <InputField
            type="password"
            placeholder="Confirm New Password"
            iconPath="M22.3901 6.70914L23.0398 6.06857C23.2122 5.89625 23.309 5.66254 23.309 5.41884C23.309 5.17515 23.2122 4.94144 23.0398 4.76912C22.8675 4.59681 22.6338 4.5 22.3901 4.5C22.1464 4.5 21.9127 4.59681 21.7404 4.76912L20.4593 6.05942L17.8695 8.64915L12.0952 14.4143C11.1491 13.79 10.0049 13.5392 8.88431 13.7105C7.76377 13.8817 6.74668 14.4628 6.03013 15.3411C5.31358 16.2195 4.94857 17.3325 5.00585 18.4646C5.06312 19.5968 5.5386 20.6673 6.34014 21.4688C7.14168 22.2704 8.21222 22.7458 9.34432 22.8031C10.4764 22.8604 11.5895 22.4954 12.4678 21.7788C13.3462 21.0623 13.9273 20.0452 14.0985 18.9247C14.2697 17.8041 14.0189 16.6599 13.3947 15.7137L18.5101 10.5892L20.4501 12.5383C20.5354 12.623 20.6366 12.6901 20.7479 12.7358C20.8591 12.7814 20.9783 12.8046 21.0985 12.8042C21.2187 12.8038 21.3377 12.7797 21.4486 12.7333C21.5596 12.6869 21.6603 12.6191 21.745 12.5338C21.8297 12.4484 21.8968 12.3473 21.9424 12.236C21.988 12.1248 22.0113 12.0056 22.0109 11.8854C22.0104 11.7651 21.9863 11.6462 21.9399 11.5352C21.8935 11.4243 21.8257 11.3236 21.7404 11.2389L19.8004 9.29887L21.0998 8.00858L21.7404 8.64915C21.8251 8.73447 21.9258 8.80227 22.0367 8.84868C22.1477 8.89508 22.2666 8.91919 22.3869 8.91961C22.5071 8.92004 22.6263 8.89678 22.7375 8.85115C22.8488 8.80553 22.9499 8.73845 23.0353 8.65372C23.1206 8.569 23.1884 8.46831 23.2348 8.35738C23.2812 8.24646 23.3053 8.12748 23.3057 8.00724C23.3062 7.887 23.2829 7.76785 23.2373 7.6566C23.1917 7.54535 23.1246 7.44418 23.0398 7.35886L22.3901 6.70914ZM9.57872 20.9756C9.03575 20.9756 8.50497 20.8145 8.05351 20.5129C7.60205 20.2112 7.25018 19.7825 7.04239 19.2808C6.83461 18.7792 6.78024 18.2272 6.88617 17.6947C6.9921 17.1621 7.25356 16.673 7.6375 16.289C8.02143 15.9051 8.5106 15.6436 9.04314 15.5377C9.57567 15.4318 10.1277 15.4861 10.6293 15.6939C11.1309 15.9017 11.5597 16.2536 11.8614 16.705C12.163 17.1565 12.324 17.6873 12.324 18.2303C12.324 18.9584 12.0348 19.6566 11.5199 20.1715C11.0051 20.6863 10.3068 20.9756 9.57872 20.9756Z"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            disabled={isLoading}

          />

          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-pink-700 text-white font-bold py-3 rounded-xl hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition duration-300 ease-in-out"
            aria-label="Reset Password"
          >
                        {isLoading ? 'Sending...' : 'Change Password'}

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
        className="absolute left-0 -top-5 px-1 text-sm text-white"
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
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

const PasswordStrengthBar = ({ strength }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <div
        style={{
          height: "10px",
          width: strength.width,
          backgroundColor: strength.backgroundColor,
        }}
      ></div>
      <small style={{ color: strength.backgroundColor }}>{strength.text}</small>
    </div>
  );
};

export default ResetPassword;
