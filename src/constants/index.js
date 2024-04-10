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
    polyloop,
    zebra,
    autorobot,
    jeopoly,
    limo,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
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
        name: "docker",
        icon: docker,
    },
];

const experiences = [
{
    title: "Embedded Systems Member",
    company_name: "Polyloop",
    icon: polyloop,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
    "Collaborated with a team of more than 10 people while establishing an effective communication system.",
    "Contributed to the construction of a high-speed mass transport system based on magnetic levitation – Hyperloop.",
    "Designed a database in PostgreSQL to represent the different data analysis of sensors collaborating with Git.",
    "Animated an interactive web application using Angular to visualize the different data in 3D and improve their efficiency.",
    "Implemented a Raspberry Pi module to monitor and log frequency converter data for Hyperloop systems analysis.",
    ],
},
{
    title: "Software Engineering Intern",
    company_name: "Zebra Technologies",
    icon: zebra,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
    "Developing and testing software using C++, focusing on tools that accelerate team development and improve operational efficiency.",
    "Conducting diagnostic tests and bench testing for electronic systems, identifying and rectifying bugs to enhance code functionality and reliability.",
    "Enhanced planning, organizational, and time management skills through hands-on project work, meeting tight deadlines in a dynamic business setting.",
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
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Autonomous Robot",
        description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
        {
            name: "c++",
            color: "blue-text-gradient",
        },
        {
            name: "embedded",
            color: "green-text-gradient",
        },
        {
            name: "linux",
            color: "pink-text-gradient",
        },
        ],
        image: autorobot,
        source_code_link: "https://github.com/dimitriosnassif/Embedded-Systems-Project---Autonomous-Robot?tab=readme-ov-file",
    },
    {
        name: "JeoPoly",
        description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
        {
            name: "angular",
            color: "blue-text-gradient",
        },
        {
            name: "nestjs",
            color: "green-text-gradient",
        },
        {
            name: "aws",
            color: "pink-text-gradient",
        },
        ],
        image: jeopoly,
        source_code_link: "https://github.com/",
    },
    {
        name: "LimoPilot",
        description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
        {
            name: "ros2",
            color: "blue-text-gradient",
        },
        {
            name: "gazebo",
            color: "green-text-gradient",
        },
        {
            name: "docker",
            color: "pink-text-gradient",
        },
        ],
        image: limo,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };