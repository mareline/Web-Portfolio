import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    CapitalOne,
    BreakThroughTech,
    WiCS,
    UPE,
    TechTogether,
    Adobe,
    MySQL,
    Python,
    Java,
    ThreeJS,
    RockPaper,
    Portfolio,
    Bookstore,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Hackathon Enthusiast",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Mentor and TA",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "Three JS",
      icon: ThreeJS,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe",
      icon: Adobe,
    },
  ];
  
  const experiences = [
    {
      title: " Technical Lead and Industry Relation",
      company_name: "WiCS at FIU",
      icon: WiCS,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Implemented strategies to promote diversity and inclusion within the organization.",
        "Collaborated with stakeholders to identify and prioritize project requirements.",
        "Collaborated with cross-functional teams to design and implement resourceful workshops to empower and train women at FIU.",
        "Conducted training sessions to enhance professional development and technical skills.",
      ],
    },
    {
      title: "Capital One Tech Mini-Mester",
      company_name: "Capital One",
      icon: CapitalOne,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - August 2023",
      points: [
        "Participated in a 5-day tech immersive experience designed to empower students from diverse backgrounds to pursue STEM careers",
        "Acquired in-depth knowledge of Node, API, Arrays, Objects, and Iterations through hands-on workshops and projects.",
        "Engaged in mentorship and networking opportunities with industry professionals, fostering valuable connections.",
        "Built a CLI-Based Coding Project in 24 hours and presented in front of Capital One leadership.",
      ],
    },
    {
      title: "Chapter Director",
      company_name: "TechTogether",
      icon: TechTogether,
      iconBg: "#383E56",
      date: "Sep 2022 - Aug 2023",
      points: [
        "Managed the development of TechTogether Miami to create a gender-focused hackathon for the Miami Tech community to increase gender diversity by planning and managing various projects, including budgeting, resource allocation, and timeline management.",
        "Conducted 50+ interviews to lead a successful organizing team of 20 organizers.",
        "Developed relationships with stakeholders in Miami's Tech community to prioritize the necessary resources to organize a successful hackathon.",
        "Liaised between cross-functional teams and ensured effective communication.",
      ],
    },
    {
      title: "Student Mentor/Teaching Assistant",
      company_name: "Break Through Tech Miami",
      icon: BreakThroughTech,
      iconBg: "#E6DEDD",
      date: "Seasonal",
      points: [
        "Partnered with the director of Breakthrough Tech Miami to implement a lesson plan tailored to 25 - 45 FIU students of marginalized genders to introduce them to coding.",
        "Assisted students create their application using MIT Media Lab, create music using Python, explore Artificial Intelligence and create a face portfolio using JavaScript.",
        "Provided frequent feedback to students to foster a welcoming environment of open communication and interest in technology.",
      ],
    },

    {
      title: "Instructor",
      company_name: "UPE Ignite at FIU",
      icon: UPE,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Lead a class of 25 students from Coral Park Elementary to introduce and enhance their coding skills using Code.org and MIT Media Lab.",
        "Designed a game and animation curriculum for the students to increase the number of participants and develop an in-depth project for UPE's Coding Contest.",
        "Offered additional assistance via 1-on-1 with students to help further their project creation, which has helped the school win 1st, 2nd, and 3rd place from UPE'S Coding Contest.",
      ],
    },
  ];

  const projects = [
    {
      name: "3D Web Design Portfolio",
      description:
        "A 3D web design portfolio that showcases my projects and skills using ThreeJS and ReactJS.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/mareline/Web-Portfolio.git",
    },
    {
      name: "100 Days of Python",
      description:
        "A 100 days of Python challenge that consists of different projects using Python.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },

      ],
      image: RockPaper,
      source_code_link: "https://github.com/mareline/100-Days-of-Code.git",
    },
    {
      name: "Bookstore",
      description:
        "A classroom assignment that showcases a library using Java, Postman, Spring Boot, and MySQL.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
      ],
      image: Bookstore,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };