import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa"; 
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Modal from './Modal';

const NavButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {children}
  </button>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleFormSubmit = (data) => {
    console.log(data);
    handleModalClose();
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } transition duration-300 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setActive("")}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer">Subtle Reply</p>
        </Link>
        <ul className="list-none sm:flex hidden flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`hover:text-white text-[18px] font-medium cursor-pointer ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <NavButton onClick={handleModalOpen}>Join the Waitlist</NavButton>
            <Modal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleFormSubmit} />
          </li>
          {/* <li>
            <Link to="/signup">
              <NavButton>Signup</NavButton>
            </Link>
          </li> */}
          <li>
            <a href="https://www.instagram.com/subtlereply" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-purple-500 hover:text-white w-6 h-6" /> 
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex justify-end items-center z-50">
          <img src={toggle ? close : menu} alt="Menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          {toggle && (
            <div className="black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg z-60">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li key={nav.id} className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => { setToggle(false); setActive(nav.title); }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <NavButton onClick={handleModalOpen}>Join the Waitlist</NavButton>
                  <Modal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleFormSubmit} />
                </li>
                {/* <li>
                  <Link to="/signup">
                    <NavButton>Signup</NavButton>
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;