import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Modal from "./Modal";

const CallToAction = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log(data); // Handle the form submission here
    handleModalClose(); // Close the modal after submission
  };
  return (
    <motion.section
      className=" py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {" "}
        {/* Adjusted styles here */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
          <h2 className="text-purple-500 font-bold text-2xl mb-4 text-center">
            Save 3 full workdays for each project
          </h2>
          <p className="text-gray-700 mb-6 text-center"></p>
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
  );
};

export default SectionWrapper(CallToAction, "");
