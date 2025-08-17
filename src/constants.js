// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/Techdata.jpg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/manipal_logo.webp';
import davlogo from './assets/education_logo/dav_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/fooddel.png';
import csprepLogo from './assets/work_logo/carrental.png';
import movierecLogo from './assets/work_logo/protfolio.png';
import taskremLogo from './assets/work_logo/ecommerce.png';
import npmLogo from './assets/work_logo/weather.png';
import webverLogo from './assets/work_logo/todo.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Data Analyst",
      company: "Tech Data",
      date: "June 2025 - August 2025",
      desc: " Worked on analysing and visualizing sales data using Excel and IBM Congos Analytics.Created dashboards to identify trends based on vendor, city, and vertical, and provided insights to support business decisions.",
     
    },
    
  ];
  
  export const education = [
    
    {
      id: 1,
      img: bsaLogo,
      school: "Manipal University Jaipur",
      date: "Sept 2022 - July 2026",
      grade: "83.6%",
      desc: "I am pursuing my Bachelor's degree in Information Technology (BTech) from Manipal University, Jaipur. Throughout my studies, I have explored a variety of subjects that have deepened my understanding of computing and technology. From studying Data Structures and Algorithms to working on Web Development, Database Management Systems, and Operating Systems, I have gained practical insights into the world of software development. My time at Manipal University, Jaipur, has allowed me to work on projects that apply theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology-BTech (Information Technology)",
    },
    {
      id: 2,
      
      school: "Doon Global School, Bihar",
      date: "Apr 2019 - March 2021",
      grade: "75.2%",
      desc: "I completed my class 12 education from VDoon Global School, Bihar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: davlogo,
      school: "D.A.V. Public School,Bihar",
      date: "Apr 2018 - March 2019",
      grade: "87.8%",
      desc: "I completed my class 10 education from D.A.V. Public School,Bihar, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Food Delievery App",
      description:
        "A fast and user-friendly food delivery website built with React.js, Node.js, Express, and MongoDB. It includes secure JWT authentication, real-time order tracking, Stripe payment integration, and smooth API communication using Axios.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "Express", "MongoDB"," Stripe ", "API"],
      github: "https://github.com/NishantKSinha/Food-Delievery-App",
      webapp: "",
    },
    {
      id: 1,
      title: "Car-rental-website",
      description:
        "Developed a full-stack car rental web application with user authentication, car booking, and availability checking features. Integrated secure APIs, responsive UI, and real-time data updates using React, Node.js, Express, and MongoDB.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NishantKSinha/Car-rental-website",
      webapp: "",
    },
    {
      id: 2,
      title: "Protfolio Website",
      description:
        "Responsive single page Personal Portfolio website using React.js and added sections like Experience,Projects,About and also connected my social media handles like LinkedIn to connect.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NishantKSinha/Protfolio",
      webapp: "",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Created a weather app using JavaScript and API integration to display real-time weather details for any city.",
      image: npmLogo,
      tags: ["JS", "CSS", "HTML", "API"],
      github: "https://github.com/NishantKSinha/Weather_App",
      webapp: "https://weather-app-self-five-63.vercel.app/",
    },
    {
      id: 4,
      title: "Ecommerce Website",
      description:
        "Developed an e-commerce website using React that includes product catalog display, shopping cart functionality, and dynamic state management. Implemented clean navigation for browsing products and a smooth add-to-cart process to simulate a real online shopping experience.",
      image: taskremLogo,
      tags: ["JavaScript", "React", "HTML", "CSS"],
      github: "https://github.com/NishantKSinha/Ecommerce-Website",
      webapp: "https://ecommerce-website-8t7o.vercel.app/",
    },
    {
      id: 5,
      title: "ToDo-list-app",
      description:
        "Built a To-Do List app that allows users to add, update, and delete tasks for simple task management.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/NishantKSinha/todo-list-app",
      webapp: "https://todo-list-app-gamma-azure.vercel.app",
    },
    
  ];  