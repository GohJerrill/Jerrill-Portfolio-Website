// ProjectFilterPill.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectFilterPill = ({ active, onChange }) => {
    const [hovered, setHovered] = useState(null);

    const tabs = [
        { key: "school", label: "School" },
        { key: "personal", label: "Personal" },
    ];

    return (
        <div className="w-full flex justify-center !mt-7">
            <ul
                className="
          relative flex items-center !gap-2
          rounded-full border border-white/15
          bg-black/35 backdrop-blur-md
          p-1.5
          shadow-[0_0_25px_rgba(0,0,0,0.25)]
        "
            >
                {tabs.map((tab) => {
                    const isActive = active === tab.key;

                    return (
                        <li key={tab.key} className="relative">
                            <button
                                type="button"
                                onClick={() => onChange?.(tab.key)}
                                onMouseEnter={() => setHovered(tab.key)}
                                onMouseLeave={() => setHovered(null)}
                                className={`
                  relative overflow-hidden rounded-full select-none
                  !px-15 !py-3
                  sm:px-10 sm:py-2.5
                  md:px-12
                  font-poppins font-semibold
                  text-[16px]
                  transition-colors duration-200
                  ${isActive ? "text-white" : "text-white/80 hover:text-white"}
                  focus:outline-none cursor-pointer
                `}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="
                      pointer-events-none absolute inset-0 rounded-full
                      bg-[#915eff]
                      shadow-[0_0_22px_rgba(145,94,255,0.45)]
                    "
                                    />
                                )}

                                {hovered === tab.key && !isActive && (
                                    <motion.div
                                        layoutId="hover-pill"
                                        transition={{ duration: 0.18 }}
                                        className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
                                    />
                                )}

                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProjectFilterPill;
