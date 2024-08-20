import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="py-4 bg-black w-full">
      <div className="w-full mx-auto px-4">
        <div className="border-t border-gray-700"></div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-white text-base">&copy; 2024 Subtle Reply AI All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4 items-center text-white text-sm md:space-x-6">
              <li>
                <Link to="/terms" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <a href="https://www.instagram.com/subtlereply" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
                  <FaInstagram className="text-purple-500 hover:text-white w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
