import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import PricingComponent from "./components/Pricing";
import FaqComponent from "./components/Faq";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import NotFoundPage from "./components/Error";
import ErrorPage from "./components/Error";
import Projects from "./components/Projects";
import Dashboard from "./components/Dashboard"; 
import AccountVerification from "./components/Verification";
import Verify from "./components/Verify";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    handleModalClose();
  };

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About />
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Experience />
                </div>
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <StarsCanvas />
                  <PricingComponent />
                  <StarsCanvas />
                </div>
                <FaqComponent />
                <motion.section
                  className="py-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
                      <h2 className="text-purple-500 font-bold text-2xl mb-4 text-center">
                        Grow your community while your brain takes a vacation
                      </h2>
                      <div className="flex justify-center">
                        <button
                          onClick={handleModalOpen}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
                        >
                          Join the Waitlist
                        </button>
                        <Modal
                          isOpen={isModalOpen}
                          onClose={handleModalClose}
                          onSubmit={handleFormSubmit}
                        />
                      </div>
                    </div>
                  </div>
                </motion.section>
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/verify" element={<AccountVerification />} /> 
          <Route path="/verification" element={<Verify />} /> 


          {/* <Route path="*" element={<Navigate to="/error" />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;