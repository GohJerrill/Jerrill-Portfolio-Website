import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./ProjectCard";
import ProjectFilterPill from "./ProjectFilterPill";
import MoreProjectsCard from "./MoreProjectsCard";
import ProjectModal from "./ProjectModal";

import { schoolProjects, personalProjects } from "./data/ProjectsWorks";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
};

/* eslint-disable react-refresh/only-export-components */
const Works = () => {
  const [activeTab, setActiveTab] = useState("school");
  const [selectedProject, setSelectedProject] = useState(null);

  const baseData = activeTab === "school" ? schoolProjects : personalProjects;

  const data =
    activeTab === "personal"
      ? [...baseData, { __placeholder: true }]
      : baseData;

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6, margin: "-120px 0px -10% 0px" }}
        className="!mt-20"
      >
        <p className={`${styles.sectionSubText} !mb-1 text-center`}>Projects</p>
        <h2
          className={`${styles.sectionHeadText} text-gray-300 leading-tight text-center`}
        >
          My Works.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6, margin: "-120px 0px -10% 0px" }}
        className="!mt-5 w-full text-white text-[17px] text-center !px-10"
      >
        Here are the IT projects that I have done so far. I have separated them
        into school and personal projects.
      </motion.p>

      <ProjectFilterPill active={activeTab} onChange={setActiveTab} />

      <motion.div
        key={activeTab}
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="!mt-10 flex flex-wrap gap-7 justify-center"
      >
        {data.length === 0 ? (
          <p className="text-white/70 text-center w-full">No projects yet.</p>
        ) : (
          data.map((project, index) =>
            project.__placeholder ? (
              <MoreProjectsCard key="more-projects" index={index} />
            ) : (
              <ProjectCard
                key={`${project.name}-${index}`}
                index={index}
                {...project}
                onClick={() => {
                  console.log("clicked project:", project.name);
                  setSelectedProject(project);
                }}
              />
            ),
          )
        )}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default SectionWrapper(Works, "Projects");
