import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SubtleReplyAICanvas } from "./canvas";

const Hero = () => {
  const isSmallScreen = window.innerWidth < 800;
  const [sectionHeight, setSectionHeight] = useState("550px");

  useEffect(() => {
    const updateSize = () => {
      setSectionHeight(window.innerWidth < 800 ? "500px" : "650px");
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const RotatingCircle = () => (
    <motion.div
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md z-20"
    />
  );

  const ScrollingCircle = () => (
    <motion.div
      animate={{ y: [0, 24, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] h-[64px] flex justify-center items-center z-20"
    >
      <a href="#about" aria-label="Scroll down to about section">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple-500 flex justify-center items-start p-2">
          <motion.div className="w-3 h-3 rounded-full bg-purple-500 mb-1" />
        </div>
      </a>
    </motion.div>
  );

  return (
    <section
      className="relative w-full mx-auto mt-20"
      style={{ height: sectionHeight }}
    >
      {" "}
      <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 z-20`}>

      <div className="flex flex-col justify-center items-center mt-10 z-20"> 
          <RotatingCircle />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-20" />
        </div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col relative z-20"
        >
          <h1
            className={`${styles.heroHeadText} text-white font-bold text-3xl sm:text-5xl mb-1 z-20`}
          >
            Welcome to <span className="text-purple-500">Subtle Reply AI</span>
          </h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`${styles.heroSubText} text-white-100 text-lg sm:text-xl z-20`}
          >
            Engage with Reddit communities with unmatched precision. Subtle
            Reply delivers your message directly to your audience on Reddit,
            swiftly and smartly.
          </motion.p>
        </motion.div>
      </div>
      {!isSmallScreen && <SubtleReplyAICanvas />}
      <div className=" mb-20">
        <ScrollingCircle />
      </div>
    </section>
  );
};

export default Hero;
