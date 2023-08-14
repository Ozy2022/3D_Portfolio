import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    aws,
    apu,
    freelance,
    fmp,
    mgg,
    portfolio,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "APU",
      icon: python,
      iconBg: "#383E56",
      date: "Jan 2020 - March 2020",
      points: [
        "Creation and management of an apartment booking system utilizing Python.",
        "Coordinating with multifaceted teams, encompassing designers, product managers, and fellow developers, to fabricate user-friendly, high-caliber products.",
        "Executing and validating seamless operation across diverse empty file.",
        "Engaging in code evaluations and supplying beneficial critiques to fellow developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "APU",
      icon: apu,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Establishment and management of a fitness center website employing HTML5, CSS, JS, and PHP.",
        "Partnering with teams, comprising designers, and fellow developers, to craft top-tier offerings.",
        "Enforcing responsive design principles and guaranteeing compatibility across various web browsers",
        "Taking part in code assessments and furnishing valuable insights to present it with a professional presentation.",
      ],
    },
    {
      title: "React Developer",
      company_name: "APU",
      icon: apu,
      iconBg: "#383E56",
      date: "Agust 2022 - Jan 2023",
      points: [
        "Developing a Features Monitoring Platform (FMP) a web application using MERN tech.",
        "Developing  Auth, Pagination, comments that carries user requests and interest to the developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Users can create, delete, edit, view and each post can be easily monitored by the other users regarding their interests.",
      ],
    },
    {
      title: "ASP.Net Developer",
      company_name: "APU",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Designing and developing a web application called Mine Gold Guide made by ASP.NET C#.",
        "Implementing services from AWS into the app, such AWS Lambda, Simple Notification Service (SNS) to the user, Amazon X-ray Service",
        "the staff and the managers are allowed to access the web application.",
        "Participating in code reviews and deploying the project under AWS services",
      ],
    },
    {
      title: "React Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "April 2023 - May 2023",
      points: [
        "Designing and developing a 3D portfolio web application using Three.js library and tailwindcss",
        "Implementing emailjs service to resive emails from the clients",
        "responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing a domain into to it",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Features Monitoring Platform",
      description:
        "Web-based platform that allows users to create, delete, and comment, view, edit request post from both platforms users Android, IOS, providing a convenient and efficient solution for Android and IOS user's needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootsrab",
          color: "pink-text-gradient",
        },
      ],
      image: fmp,
      source_code_link: "https://github.com/Ozy2022/FeaturesMonitoringPlatform",
    },
    {
      name: "3D Portfolio",
      description:
        "3D Portfolio Website with Three.js and React.js, And responsiveness across all devices with a great performance using Suspense and Preload, And the ability to send emails through a form on the website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Ozy2022/3D_Portfolio",
    },
    {
      name: "Mine Gold Guide",
      description:
        "a scalable and user-friendly AWS-hosted web app tailored to the mining sector. and establish an online hub for team members and upper management to share information and track progress on projects in real time.",
      tags: [
        {
          name: "ASP.Net",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mgg,
      source_code_link: "https://github.com/Ozy2022/GoldMineGuide",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };