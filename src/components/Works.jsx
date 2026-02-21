// Works.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";
import ProjectFilterPill from "./ProjectFilterPill";

// images
import TPVendings from "../assets/TPVendings.png";
import IITQuest from "../assets/IITQuest.png";
import TPUnite from "../assets/TPUnite.png";
import NatureQuest from "../assets/NatureQuest2.png";
import GrowMate from "../assets/GrowMate.png";
import IITQuestSecurity from "../assets/IITQuestAppsec.png";
import TPSeatria from "../assets/TPSeatria.png";
import RoyalHarmony from "../assets/RoyalHarmony.png";
import TPEventure from "../assets/TPEventure.png";
import CineMEI from "../assets/CineMEI.png";
import FootballPredictions from "../assets/FootballPredictions.png";
import PeppersQuiz from "../assets/PeppersQuiz.png";
import Eric from "../assets/Eric4Sons.png";
import Portfolio from "../assets/Portfolio.png"

const schoolProjects = [
    {
        name: "IIT Quest",
        description:
            "My first ever assignment on HTML, CSS and JS. This is a gamified approach for students to learn before the school semester begins to get a head start in their learning.",
        tags: [
            {
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-500",
            },
        ],
        image: IITQuest,
        source_code_link: "https://github.com/",
    },
    {
        name: "TP Vendings",
        description:
            "A web based application using HTML, CSS and Javascript to make API calls for the admin users to perform CRUD functionalities to Vending machines in Temasek Polytechnic",
        tags: [
            {
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-500",
            },
            {
                name: "Express JS",
                color: "pink-text-gradient",
            },
            {
                name: "Rest API",
                color: "text-purple-400",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
        ],
        image: TPVendings,
        source_code_link: "https://github.com/",
    },
    {
        name: "TP Unite",
        description:
            "A AWS cloud based application for users to search, vote and view Temasek Polytechnic CCA matches live. This utilises Microservice Architecture AWS services like API Gateway, Lambda and Dynamo DB",
        tags: [
            {
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-500",
            },
            {
                name: "API Gateway",
                color: "text-purple-500",
            },
            {
                name: "Lambda",
                color: "text-orange-400",
            },
            {
                name: "Dynamo DB",
                color: "text-blue-300",
            },
            {
                name: "RDS",
                color: "green-text-gradient",
            },
            {
                name: "Cognito",
                color: "pink-text-gradient",
            },
        ],
        image: TPUnite,
        source_code_link: "https://github.com/",
    },
    {
        name: "TPEventure",
        description:
            "TPEventure is a full stack web application using the MERN stack. It leverages a gamified approach to encourage students to join TP related events. Users can use the points they earn to redeem reward incentivising the process.",
        tags: [
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "orange-text-gradient",
            },
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "text-blue-300",
            },
            {
                name: "React Framer Motion",
                color: "text-red-500",
            },
        ],
        image: TPEventure,
        source_code_link: "https://github.com/",
    },
    {
        name: "Nature Quest",
        description:
            "A nature based mobile application made using Flutter. Users can grow trees via completing tasks and challenges to earn growth points. The application is supported by Firebase.",
        tags: [
            {
                name: "Dart",
                color: "blue-text-gradient",
            },
            {
                name: "Flutter",
                color: "green-text-gradient",

            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
            {
                name: "Firebase Auth",
                color: "pink-text-gradient",
            },
        ],
        image: NatureQuest,
        source_code_link: "https://github.com/",
    },
    {
        name: "GrowMate",
        description:
            "A web application powered by AWS for users to use IOT devices to grow plants. If the user has sucessfully grown their plants, they received points where they can spent as a reward.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "text-blue-500",
            },
            {
                name: "AWS",
                color: "orange-text-gradient",
            },
            {
                name: "IOT Core",
                color: "green-text-gradient",
            },
            {
                name: "Lambda",
                color: "text-orange-400",
            },
            {
                name: "Dynamo DB",
                color: "text-blue-300",
            },
            {
                name: "API Gateway",
                color: "text-purple-500",
            },
            {
                name: "Amplify",
                color: "text-yellow-400",
            },
            {
                name: "Cognito",
                color: "pink-text-gradient",
            },
        ],
        image: GrowMate,
        source_code_link: "https://github.com/",
    },

    {
        name: "IITQuest Security",
        description:
            "This is a follow up project for my IIT Quest website project. I implemented further security meausres especially in authentication using MongoDB and JWT tokens while keeping the website in line with Owasp top 10.",
        tags: [
            {
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-500",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "JSONwebtokens",
                color: "pink-text-gradient",
            },
            {
                name: "Recaptcha",
                color: "text-white-500",
            },
            {
                name: "MFA",
                color: "text-purple-500",
            },
        ],
        image: IITQuestSecurity,
        source_code_link: "https://github.com/",
    },

    {
        name: "CineMEI",
        description:
            "This is a movie website for admin users to view different movie ratings. The main focus of this project is to simulate DevOps workflow of build, test and deployment using node, jest/Playwright and docker/Minikube.",
        tags: [
            {
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-500",
            },
            {
                name: "Jenkins",
                color: "text-purple-500",
            },
            {
                name: "Jest",
                color: "text-red-500",
            },
            {
                name: "Playwright",
                color: "green-text-gradient",
            },
            {
                name: "Docker",
                color: "text-blue-300",
            },
            {
                name: "Minikube",
                color: "text-blue-200",
            },
        ],
        image: CineMEI,
        source_code_link: "https://github.com/",
    },

    {
        name: "Football Prediction",
        description:
            "With the World Cup 2026 just around the corner, I wanted to see how much I would be worth if I was a football player. Thus, I did this machine learning project using Machine learning CrispDM lifecycle. I have also publish a StreamLit website for users to try it out as well.",
        tags: [
            {
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "StreamLit",
                color: "orange-text-gradient",
            },
        ],
        image: FootballPredictions,
        source_code_link: "https://github.com/",
    },

    {
        name: "Royal Harmony",
        description:
            "This was my first project for user UIUX. Royal Harmony is a gamified music application where users can find their favourite tunes and socialise. Users can also earn points if they maintain a consistent streak of using the application.",
        tags: [
            {
                name: "Axure RP",
                color: "blue-text-gradient",
            },
        ],
        image: RoyalHarmony,
        source_code_link: "https://github.com/",
    },
    {
        name: "TPSetria",
        description:
            "TP Setria is a design mobile application concept designed using figma to help students to find suitable and quiet study spaces in TP. I have also implemented a gamification element to the application allowing users to earn points.",
        tags: [
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        ],
        image: TPSeatria,
        source_code_link: "https://github.com/",
    },
];

const personalProjects = [
    {
        name: "Peppers Quiz",
        description:
            "AWS powered web application for my community. Users login via a code, points are recorded and displayed on a leaderboard. Microservice Architecture.",
        tags: [
            { name: "ReactJS", color: "blue-text-gradient" },
            { name: "API Gateway", color: "text-purple-300" },
            { name: "Lambda", color: "text-yellow-500" },
            { name: "DynamoDB", color: "text-blue-200" },
        ],
        image: PeppersQuiz,
        source_code_link: "https://github.com/",
    },
    {
        name: "Eric4Sons",
        description:
            "This Wireframe was done for NETS PolyFintech Hackathon 2025. This is a gamified approach for how youths uses NETs. It empowers NETs to be relevant to Gen Z youths having Rewards feature and split the bill rewards. Our idea reached Paytech Category Finalist.",
        tags: [
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        ],
        image: Eric,
        source_code_link: "https://github.com/",
    },
    {
        name: "Portfolio Website",
        description:
            "WHATS UP TO THIS PROJECT! This project took much planning and mental resilience to pull through. I managed to implement React Framer Motion with ThreeJS for this project. ",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "Framer Motion",
                color: "orange-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "white-text-gradient",
            },
        ],
        image: Portfolio,
        source_code_link: "https://github.com/",
    },
];

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.02 },
    },
};

/* eslint-disable react-refresh/only-export-components */
const Works = () => {
    const [activeTab, setActiveTab] = useState("school");
    const data = activeTab === "school" ? schoolProjects : personalProjects;

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} !mb-1 text-center`}>Projects</p>
                <h2 className={`${styles.sectionHeadText} text-gray-300 leading-tight text-center`}>
                    My Works.
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="!mt-5 w-full text-white text-[17px] text-center !px-10"
            >
                Here is my IT projects that I have done thus far. I have seperated it to School and personal HEHEH
            </motion.p>

            <ProjectFilterPill active={activeTab} onChange={setActiveTab} />

            <motion.div
                key={activeTab}
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="!mt-10 flex flex-wrap gap-7 justify-center"
            >
                {data.length === 0 ? (
                    <p className="text-white/70 text-center w-full">No projects yet.</p>
                ) : (
                    data.map((project, index) => (
                        <ProjectCard key={`${project.name}-${index}`} index={index} {...project} />
                    ))
                )}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Works, "Projects");
