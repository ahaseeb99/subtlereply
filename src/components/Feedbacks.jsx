import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <div className="max-w-md mx-auto">
    <div className="bg-black-200 p-6 md:p-10 rounded-lg h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-6">
          <p className="text-white font-bold text-4xl">"</p>
        </div>
        <div className="text-center">
          <p className="text-white text-base md:text-lg mb-4">{testimonial}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div>
          <p className="text-white font-medium text-base">
            <span className="text-blue-500">@</span> {name}
          </p>
          <p className="text-gray-400 text-sm">{designation} {company}</p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="mt-0 bg-black-900 rounded-lg p-8"> {/* Changed mt-12 to mt-0 */}
      <div className="bg-black-800 rounded-lg p-8 flex flex-col items-center justify-center">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>ENTREPRENEURS LOVE SAVING TIME</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <FeedbackCard {...testimonial} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
