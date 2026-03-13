import React, { memo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = memo(({ index, project, onOpen }) => {
  const { name, description, tags, image } = project;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <div
        onClick={() => onOpen(project)}
        className="sm:w-[360px] w-full cursor-pointer"
      >
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.01}
          transitionSpeed={300}
          className="bg-[#151030] !p-5 rounded-2xl w-full"
        >
          <div className="relative w-full h-[250px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="!mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="!mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="!mt-4 flex flex-wrap gap-2">
            {(Array.isArray(tags) ? tags : []).map((tag, i) => (
              <p
                key={`${name}-${tag?.name ?? i}`}
                className={`text-[14px] ${tag?.color ?? ""}`}
              >
                #{tag?.name ?? "tag"}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
});

export default ProjectCard;
