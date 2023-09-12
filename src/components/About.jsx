import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  //Creating the cards with motion and tilt
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >

        I am a computer science student with a deep commitment to fostering diversity and inclusion within the tech industry. My expertise merges strong leadership and technical skills.

        Currently, I serve as the Technical Lead and Industry Relations coordinator at WiCS FIU (Women in Computer Science). My role involves actively shaping gender diversity and inclusion through impactful workshops for students at FIU, achieved through cross-functional collaboration. I served as the previous Director at TechTogether Miami, where I have successfully organized a gender-focused hackathon, representing marginalized gender students through effective project management, budgeting, and community engagement. 

        I further honed my technical skills during Capital One's Tech Mini-Mester, gaining practical experience in Node, API, Arrays, Objects, and Iterations, while expanding my industry network. My participation in Microsoft's Tech Resilience Mentoring Program and personal projects such as the 100-Days-of-Code initiative continually elevate my programming skills.

        I am fluent in English and Spanish, and am skilled in Java, Javascript, HTML, CSS, MySQL, and Python.
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10 place-content-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");