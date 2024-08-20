import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="py-12 bg-tertiary  to-purple-600"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-4xl font-bold text-white mb-6"
          >
            Stay Up to Date with Our Newsletter
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="text-gray-300 mb-8"
          >
            Subscribe to our newsletter and be the first to know about our
            latest updates, offers, and industry insights.
          </motion.p>
          {submitted ? (
            <motion.div
              variants={fadeIn("up", "tween", 0.8, 1)}
              className="bg-green-500 text-white p-4 rounded"
            >
              Thank you for subscribing! 🎉
            </motion.div>
          ) : (
            <motion.form
              variants={fadeIn("up", "tween", 1, 1)}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-4 rounded-l-md sm:rounded-l-none sm:rounded-r-none mb-4 sm:mb-0 w-full sm:w-auto"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </motion.form>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(NewsletterSection, "");
