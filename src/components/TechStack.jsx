import React from 'react'
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import { Frameworks } from './Frameworks'

const TechStack = () => {
    const FrontendSkills = ["React", "HTML", "CSS", "ThreeJS", "Framer Motion", "TailwindCSS", "MUI", "MagicUI", "Flutter", "AWS"]
    const backendSkills = ["Node.js", "Express", "SQL", "MongoDB", "Firebase", "DynamoDB", "RDS"];
    const devOpsSkills = ["Github", "Github Actions", "Jenkins", "PlayWright", "Jest", "Cypress", "Postman", "MiniKube", "Docker", "Podman", "Kubernetes"];
    const languageSkills = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Dart"];

    return (
        /* Changed !px to !pl to keep the left side original, but removed right padding (!pr-0) */
        <div className="!mt-10 !pl-5 lg:!pl-25 !pr-0 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start overflow-hidden">

            {/* TEXT SIDE - REMAINING EXACTLY THE SAME */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} !mb-1 text-center lg:text-left`}>Tech Stack</p>
                    <h2 className={`${styles.sectionHeadText} text-gray-300 !mt-0 leading-tight text-center lg:text-left`}>
                        Skills BABY.
                    </h2>
                </motion.div>

                <div className="!mt-5 flex flex-col gap-5">
                    <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="!ml-2 !mb-1 font-iceland text-sky-400 text-[25px] text-left">Application Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {FrontendSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="!ml-2 !mb-1 font-iceland text-purple-400 text-[25px] mb-4 text-left">Backend + DB</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="!ml-2 !mb-1 font-iceland text-red-500 text-[25px] mb-4 text-left">DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {devOpsSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="!p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h3 className="!ml-2 !mb-1 font-iceland text-emerald-400 text-[25px] mb-4 text-left">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {languageSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ORBIT SIDE - Shifted further right to hug the edge */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end self-start lg:-translate-y-10 relative h-full w-full">
                <div className="!mt-25 absolute top-1/2 left-[60%] lg:left-[50%] -translate-y-1/2 w-full flex items-center justify-center lg:scale-150 transform-gpu">
                    <Frameworks />
                </div>
            </div>
        </div>
    )
}

export default TechStack