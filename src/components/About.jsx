import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";



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
    </>
  )
}

export default About