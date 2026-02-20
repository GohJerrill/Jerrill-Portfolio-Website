import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'

import { jobit } from '../assets'
import { tripguide } from '../assets'
import { carrent } from '../assets'

import TPVendings from "../assets/TPVendings.png"
import IITQuest from "../assets/IITQuest.png"
import TPUnite from "../assets/TPUnite.png"
import NatureQuest from "../assets/Nature Quest.png"
import GrowMate from "../assets/GrowMate.png"

import ProjectFilterPill from './ProjectFilterPill';

const projects = [
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
                name: "AWS RDS",
                color: "green-text-gradient",
            },
            {
                name: "AWS Cognito",
                color: "pink-text-gradient",
            },
        ],
        image: TPUnite,
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
                name: "AWS IOT Core",
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
];


/* eslint-disable react-refresh/only-export-components */
const Works = () => {
    const [activeTab, setActiveTab] = useState("school");


    return (

        <>

            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} !mb-1 text-center`}>
                    Projects
                </p>

                <h2 className={`${styles.sectionHeadText} text-gray-300 leading-tight text-center`}>My Works.</h2>

            </motion.div>


            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="!mt-5 w-full text-white text-[17px] text-center !px-10"
            >
                Here is my IT projects that I have done thus far. I have seperated it to School and personal HEHEH
            </motion.p>

            {/* Include the filter pill here in the center */}
            <ProjectFilterPill active={activeTab} onChange={setActiveTab} />


            <div className='!mt-10 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>



        </>
    )
}

export default SectionWrapper(Works, "Projects")