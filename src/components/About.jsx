import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, subtitle, content }) => (
  <div className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-secondary text-[16px] mt-2 text-center">
          {subtitle}
        </p>
        <p className="text-white text-[15px] mt-4 leading-relaxed text-center">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div className="mt-10">
        <h1
          className={`${styles.heroHeadText} text-white font-bold text-3xl sm:text-5xl mb-4`}
        >
          <span className="text-purple-500">Connect Smarter</span>,{" "}
          <span className="text-white-500">Not Harder</span>
        </h1>
        <p className={styles.sectionSubText}>LET AI DO THE WORK FOR YOU</p>
      </div>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Empower your business with the future of intelligent communication.
        We're a passionate team of AI enthusiasts building tools to help you
        break through the noise and scale. Leverage the power of artificial
        intelligence to transform the way you engage online. Dive into the
        conversations that matter and connect with potential customers in a
        meaningful way.
      </p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            className="sm:w-[350px] w-full"
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");