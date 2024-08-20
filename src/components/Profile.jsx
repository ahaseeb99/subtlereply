import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import StatisticsCard from "./Statistics";
import axios from "axios";
import UpdatePassword from "./UpdatePassword";
import PersonalInfoCard from "./PersonalInfo";
import TransactionHistory from "./TransactionHistory";
import { Link, useNavigate,  useLocation } from "react-router-dom";
import Preloader from "./Preloader";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const codeVerifier = searchParams.get("code_verifier");
    const state = searchParams.get("state");
    const error = searchParams.get("error");
  
    if (code && codeVerifier && state && !error) {
      console.log("sso");
      const url = `https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/auth/google/callback?code=${code}&code_verifier=${codeVerifier}&state=${state}`;
  
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  }, [location.search]);
  

  useEffect(() => {
    console.log("token");

    const token = localStorage.getItem("token");
    if (!token) {
      // navigate("/login");
      return; 
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://subtlereply-staging-088fa1d6c0e4.herokuapp.com/api/users/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "application/json",
            },
          }
        );

        console.log(response.data);
        if (!response.data.is_active) {
          console.log("active");

          console.log(response.data);
          // navigate("/login");
          return; 
        }

        setUserData(response.data);
      } catch (error) {
        console.log("error");

        console.log(error);
        // navigate("/login"); 
      }
    };

    fetchUserData();
  }, [navigate]);

 
  if (!userData) {
    return       <Preloader/>
  }



  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center pt-12">
      <div className="w-full px-4 lg:w-4/5">


        <ProfileHeader />
        <div className="mt-8 flex flex-col lg:flex-row lg:space-x-8">
          <div className="bg-custom border-2 border-purple-400 rounded-lg p-4 mb-8 lg:mb-0 lg:w-1/3">
            <PersonalInfoCard />
          </div>
          <div className="bg-custom border-2 border-purple-400 rounded-lg p-4 lg:w-2/3">
            <StatisticsCard />
          </div>
        </div>
        <div className="mt-10 mb-10 border-2 border-purple-400 w-full">
        <TransactionHistory></TransactionHistory>

        </div>
        <div className="mb-10 border-2 border-purple-400 w-full">
          <UpdatePassword />
        </div>
      </div>
    </div>
  );
};

export default Profile;
