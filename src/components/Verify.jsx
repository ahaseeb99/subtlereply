import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SuccessModal from "./SuccessModal";
import axios from "axios";
import Preloader from "./Preloader";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(!!token);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/verify",
          { token },
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );

        if (response.data.success) {
          setIsSuccess(true);
        }

        if (response.data.detail === "VERIFY_USER_ALREADY_VERIFIED") {
          setIsSuccess(true);
          setMessage("Your account was already verified.");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data.detail === "VERIFY_USER_ALREADY_VERIFIED"
        ) {
          setIsSuccess(true);
          setMessage("Your account was already verified.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      verifyToken();
    } else {
      console.log("No token found in the URL.");
      setIsLoading(false);
    }
  }, [navigate, token]);

  const handleModalClose = () => {
    navigate("/verify");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-custom">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
      {isSuccess ? (
        <SuccessModal message={message} url="/login" />
      ) : (
        <div className="bg-custom rounded-2xl shadow-2xl w-full max-w-md mx-auto p-8 text-center m-10">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Account Verification Needed
          </h2>./
          <p className="text-lg text-gray-300 mb-8">
            Your account has not been verified yet. Please click the button
            below to verify your account and gain access to all features.
          </p>
          <button
            onClick={handleModalClose}
            className={`px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-700 text-white font-semibold hover:bg-gradient-to-l transition duration-300 ease-in-out ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Verify Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Verify;
