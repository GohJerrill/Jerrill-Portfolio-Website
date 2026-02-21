// CertificationsCard.jsx
import React from "react";
import { motion } from "framer-motion";

const CertificationsCard = ({ index, name, description, source = [], image, onOpen }) => {
    return (
        <motion.button
            type="button"
            onClick={onOpen}
            index={index}
            className="
                bg-[#151030] w-full sm:w-[360px] text-left
                rounded-2xl border border-white/10
                !p-5 cursor-pointer
                transition-shadow duration-300
                hover:shadow-[0_0_22px_rgba(145,94,255,0.18)]
                focus:outline-none
            "
            initial={false}
            whileHover={{ scale: 0.955 }}
            whileTap={{ scale: 0.97 }}
        >
            {/* Image preview */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                    draggable="false"
                />

                {/* tiny "click to view" hint */}
                <div className="absolute bottom-3 right-3 !px-3 py-1 rounded-full bg-black/50 border border-white/15 text-white/80 text-[12px]">
                    Click to view
                </div>
            </div>

            {/* Text */}
            <div className="!mt-5">
                <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
                    {name}
                </h3>

                {/* Source badges */}
                <div className="!mt-2 flex flex-wrap gap-2">
                    {(Array.isArray(source) ? source : []).map((s, i) => (
                        <span
                            key={`${name}-src-${s?.name ?? i}`}
                            className={`text-[15px] ${s?.color ?? "text-white/70"}`}
                        >
                            {s?.name ?? "Source"}
                        </span>
                    ))}
                </div>

                <p className="!mt-2 text-secondary text-[14px] leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.button>
    );
};

export default CertificationsCard;
