import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'; 

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt>
        
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Check out what I have been working on!</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w 3xl leading-[30px]'
        >
          These following projects showcases my skills and experience. Each project has its own description along with links to the repositories. I will include the projects I have completed outside of CS!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />  

      ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");