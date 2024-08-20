import React, { useState, useRef,useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ProjectCard = ({ index, name, description, tags, back }) => {
  const [showBack, setShowBack] = useState(false);
  let leaveTimeout;

  const handleMouseEnter = () => {
    setShowBack(true);
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
  };

  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => {
      setShowBack(false);
    }, 1000); 
  };

  useEffect(() => {
    return () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="mx-auto w-full sm:w-[360px] rounded-2xl overflow-hidden shadow-lg sm:max-w-xs lg:max-w-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-tertiary rounded-2xl cursor-pointer flex flex-col justify-center items-center"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s',
          transform: showBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '300px',
        }}
      >
        {/* Front of the card */}
        <motion.div
          className="bg-tertiary rounded-2xl p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            opacity: showBack ? 0 : 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}
        >
          <h3 className="text-white font-bold text-[24px] mt-4">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} px-2 py-1 rounded-md`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </motion.div>
        {/* Back of the card */}
        <motion.div
          className="bg-tertiary rounded-2xl p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: showBack ? 1 : 0,
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-white text-[16px] text-center">{back}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Why Join Us</p> */}
        <h2 className={`${styles.sectionHeadText}`} >
          Make a Difference with <span className='text-purple-500'>Subtle Reply</span>
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 flex flex-wrap justify-center gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, '');