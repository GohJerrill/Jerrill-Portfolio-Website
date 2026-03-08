import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const MoreProjectsCard = ({ index = 0 }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.12, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div
                className="
          bg-[#151030]/40
          border-2 border-dashed border-white/25
          rounded-2xl
          sm:w-[360px] w-full
          !p-5
          flex flex-col items-center justify-center
          min-h-[450px]
          text-center
          transition-transform duration-300
          hover:scale-[0.98]
          hover:border-[#915eff]/60
        "
            >
                <div className="text-[42px] leading-none">📍</div>

                <h3 className="!mt-4 text-white font-bold text-[22px]">
                    More Personal Projects on the way!
                </h3>

                <p className="!mt-2 text-white/70 text-[15px] max-w-[28ch]">
                    Making more fun future projects.
                </p>
            </div>
        </motion.div>
    );
};

export default MoreProjectsCard;