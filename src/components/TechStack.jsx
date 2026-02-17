import React from 'react'
import { motion } from 'framer-motion'

import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from "../hoc"
import { Frameworks } from './Frameworks'




const TechStack = () => {

    const FrontendSkills = ["React", "HTML", "CSS", "ThreeJS", "Framer Motion", "TailwindCSS", "MUI", "MagicUI", "Flutter", "AWS"]
    const backendSkills = ["Node.js", "Express", "SQL", "MongoDB", "Firebase", "DynamoDB", "RDS"];
    const devOpsSkills = ["Github", "Github Actions", "Jenkins", "PlayWright", "Jest", "Cypress", "Postman", "MiniKube", "Docker", "Podman", "Kubernetes"];
    const languageSkills = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Dart"];


    return (
        <>
            <div
                className="!mt-10 !px-5 lg:!px-25 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start"
            >
                <div
                    className="order-1 lg:order-2 flex justify-center lg:justify-end self-start lg:-translate-y-4"
                >
                    {/* Include the Orbit here */}
                    <Frameworks />

                </div>

                {/* TEXT SECOND on mobile, LEFT column on desktop */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <motion.div variants={textVariant()}>
                        <p className={`${styles.sectionSubText} !mb-1 text-center lg:text-left`}>Tech Stack</p>
                        <h2 className={`${styles.sectionHeadText} text-gray-300 !mt-0 leading-tight text-center lg:text-left`}>
                            Skills BABY.
                        </h2>
                    </motion.div>

                    {/* Include the Tech Stack here */}

                    <div className="!mt-5 flex flex-col gap-5">

                        {/* 1. Application Development (Standardized) */}
                        <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="!ml-2 !mb-1 font-iceland text-sky-400 text-[25px] text-left">Application Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((skill) => (
                                    <span key={skill} className="!px-5 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[19px]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 2. Backend + DB (Purple Header) */}
                        <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="!ml-2 !mb-1 font-iceland text-purple-400 text-[25px] mb-4 text-left">Backend + DB</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill) => (
                                    <span key={skill} className="!px-5 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[19px]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 3. DevOps (Red Header) */}
                        <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="!ml-2 !mb-1 font-iceland text-red-500 text-[25px] mb-4 text-left">DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {devOpsSkills.map((skill) => (
                                    <span key={skill} className="!px-5 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[19px]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 4. Languages (Emerald Header) */}
                        <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="!ml-2 !mb-1 font-iceland text-emerald-400 text-[25px] mb-4 text-left">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languageSkills.map((skill) => (
                                    <span key={skill} className="!px-5 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[19px]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
































                    {/* <div className="!mt-3 flex flex-col gap-6">

                       
                        <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="!ml-2 font-iceland text-sky-400 text-[25px] mb-4 text-left">Application Development</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="!px-4 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">React</span>
                                <span className="!px-4 !py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Tailwind</span>
                                <span className="!px-4 py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Three.js</span>
                                <span className="!px-4 py-0.5 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Framer Motion</span>
                            </div>
                        </div>

                        
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="font-iceland text-purple-400 text-[24px] mb-4 text-left">Backend + DB</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Node.js</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Express</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">PostgreSQL</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">MongoDB</span>
                            </div>
                        </div>

                        
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="font-iceland text-red-500 text-[24px] mb-4 text-left">DevOps</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Git</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Docker</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Figma</span>
                            </div>
                        </div>

                        
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="font-iceland text-emerald-400 text-[24px] mb-4 text-left">Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Git</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Docker</span>
                                <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white font-iceland text-[18px]">Figma</span>
                            </div>
                        </div>

                    </div> */}


                </div>
            </div>


        </>
    )
}

export default TechStack