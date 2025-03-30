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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: mobile,
  },
  {
    title: "Gen AI intern",
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
    name: "React JS",
    icon: reactjs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Digital Ipsum",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed responsive and visually appealing user interfaces with Tailwind CSS, ensuring cross-browser compatibility.",
      "Built and integrated RESTful APIs to enhance application functionality and improve data handling.",
      "Implemented authentication and authorization using JWT to secure user data.",
    ],
  },
  {
    title: "Lead Web Developer",
    company_name: "VJTI Racing",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Mar 2025",
    points: [
      "Designed and developed the website for VJTI Racing using React.js, Tailwind CSS, and deployed it on Vercel.",
      "Created responsive and visually appealing user interfaces.",
      "Optimized website performance and ensured seamless user experience across multiple devices and browsers.",
      "Deployed and maintained production-ready applications on Vercel with CI/CD workflows.",
    ],
  },
  {
    title: "AI Software Developer",
    company_name: "Paper Pilot",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - present",
    points: [
      "Assisting in developing AI models for natural language processing and machine learning tasks.",
      "Working with large datasets to fine-tune and evaluate generative AI models.",
      "Collaborating with senior engineers to research and implement state-of-the-art AI techniques.",
      "Building and optimizing AI pipelines for efficiency and scalability.",
      "Documenting findings and presenting insights to the team for continuous improvement.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };