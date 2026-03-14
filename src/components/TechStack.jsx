import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { Frameworks } from "./Frameworks";
import { SectionWrapper } from "../hoc";

/* eslint-disable react-refresh/only-export-components */
const TechStack = () => {
    const FrontendSkills = ["React", "HTML", "CSS", "ThreeJS", "Framer Motion", "TailwindCSS", "MUI", "MagicUI", "Flutter", "AWS", "Vitejs", "Figma"];
    const backendSkills = ["Node.js", "Express", "MySQL", "MongoDB", "Firebase", "DynamoDB", "RDS", "Lambda"];
    const devOpsSkills = ["Github", "Github Actions", "Jenkins", "PlayWright", "Jest", "Cypress", "Postman", "Docker", "Podman", "Kubernetes"];
    const languageSkills = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Dart"];

    return (
        <div className="!mt-20 lg:!pl-25 lg:!pr-0 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start overflow-x-hidden">
            {/* TEXT SIDE */}
            <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <motion.div variants={textVariant()} className="w-full">
                    <p className={`${styles.sectionSubText} !mb-1 text-center lg:text-left`}>Tech Stack</p>
                    <h2 className={`${styles.sectionHeadText} text-gray-300 !mt-0 leading-tight text-center lg:text-left`}>
                        Skills BABY.
                    </h2>
                </motion.div>

                <div className="!mt-5 w-full flex flex-col gap-5">
                    {/* Application Development */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.15, 0.75)}
                        className="w-full max-w-[680px] md:max-w-none mx-auto md:mx-0 !p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <h3 className="!ml-0 lg:!ml-2 !mb-1 font-iceland text-sky-400 text-[25px] text-center lg:text-left">
                            Application Development
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {FrontendSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend Skills + DB */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.25, 0.75)}
                        className="w-full max-w-[680px] md:max-w-none mx-auto md:mx-0 !p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <h3 className="!ml-0 lg:!ml-2 !mb-1 font-iceland text-purple-400 text-[25px] text-center lg:text-left">
                            Backend + DB
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {backendSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* DEVOPS */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.35, 0.75)}
                        className="w-full max-w-[680px] md:max-w-none mx-auto md:mx-0 !p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <h3 className="!ml-0 lg:!ml-2 font-iceland text-red-500 text-[25px] !mb-1 text-center lg:text-left">
                            DevOps
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {devOpsSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        variants={fadeIn("up", "spring", 0.45, 0.75)}
                        className="w-full max-w-[680px] md:max-w-none mx-auto md:mx-0 !p-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <h3 className="!ml-0 lg:!ml-2 !mb-1 font-iceland text-emerald-400 text-[25px] text-center lg:text-left">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {languageSkills.map((skill) => (
                                <span key={skill} className="!px-4.5 !py-1 rounded-full bg-black/40 border border-white/10 text-white text-[15px]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                variants={fadeIn("left", "spring", 0.2, 1)}
                className="!mt-7 hidden lg:flex order-1 lg:order-2 justify-center lg:justify-end self-start lg:-translate-y-10 relative w-full lg:min-h-[1000px] xl:min-h-[820px]"
            >
                <div className="absolute top-1/2 left-[50%] lg:left-[50%] xl:left-[50%] -translate-y-1/2 w-full flex items-center justify-center lg:scale-125 xl:scale-140 transform-gpu">
                    <Frameworks />
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(TechStack, "TechStack");

