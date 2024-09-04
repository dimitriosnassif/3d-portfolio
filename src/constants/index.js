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
    "Collaborated with a team of over 20+ like-minded students to construct a small-scale Hyperloop transportation system based on magnetic levitation.",
    "Designed and integrated a Raspberry Pi module for real-time sensor monitoring and data analytics using Python, with continuous data transmission to a Kafka cluster.",
    "Developed a Node.js/Express backend leveraging WebSockets for real-time transmission and display of sensor data, supporting seamless updates for live monitoring.",
    "Centralized various sensor data within a user-friendly Angular interface, utilized by over 15+ users, ensuring seamless integration.",
    ],
},
{
    title: "Software Engineering Intern",
    company_name: "Zebra Technologies",
    icon: zebra,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
    "Collaborated with T&D (Test & Diagnostics) developers using Jira and Confluence to document and improve test methodologies, aiding in the technology transfer to an overseas production site.",
    "Developed a PowerShell script to streamline the creation of bootable USB keys for machine vision product testing, reducing process time by 36%",
    "Engineered a Python code to automate package downloads for releases, migrating from a local server to Artifactory, used by 10+ developers when releasing code, hence eliminating server dependency",
    "Integrated a Python utility into the team’s testing suite, converting 1000+ Splunk generated logs into human-readable formats within seconds, reducing log processing time by 80% for production staff."
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