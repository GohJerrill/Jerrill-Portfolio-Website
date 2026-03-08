import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, onClick }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <div onClick={onClick} className="sm:w-[360px] w-full cursor-pointer">
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className="bg-[#151030] !p-5 rounded-2xl w-full"
        >
          <div className="relative w-full h-[250px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
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
};

export default ProjectCard;
