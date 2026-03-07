// Certifcations.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import CertificationsCard from "./CertificationsCard";

// images
import AWSCERT from "../assets/aws_cert.png";
import CareerEssentialsAI from "../assets/Cert1.png";
import Ethics from "../assets/Cert2.png";
import Microsoft365 from "../assets/Cert3.png";
import ThoughtfulOnlineSolution from "../assets/Cert4.png";
import StreamlineMicrosoft from "../assets/Cert5.png";
import WhatsGenerativeAI from "../assets/Cert6.png";
import AIMicrosoft from "../assets/AIMicrosoft.png";

const Certifications = [
  {
    name: "AWS Cloud Practictioner Essentials",
    description:
      "Foundational understanding of AWS cloud concepts, services, and cloud architecture.",
    Source: [{ name: "AWS", color: "orange-text-gradient" }],
    image: AWSCERT,
  },
  {
    name: "Career Essentials in Generative AI",
    description:
      "Fundamentals of generative AI and how to apply it responsibly in real-world workflows.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: CareerEssentialsAI,
  },
  {
    name: "Ethics in the Age of AI",
    description:
      "Key ethical considerations of AI, fairness, accountability, and safe deployment practices.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: Ethics,
  },
  {
    name: "Microsoft 365 Fundamentals",
    description:
      "Core Microsoft 365 concepts including productivity, collaboration, and cloud services.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: Microsoft365,
  },
  {
    name: "Thoughtful Online Solutions",
    description:
      "Digital awareness and online best practices for secure and responsible usage.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: ThoughtfulOnlineSolution,
  },
  {
    name: "Streamline with Microsoft",
    description:
      "Practical productivity techniques using Microsoft tools and workflows.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: StreamlineMicrosoft,
  },
  {
    name: "What's Generative AI?",
    description:
      "Introduction to GenAI concepts, capabilities, and limitations with real examples.",
    Source: [{ name: "LinkedIn", color: "blue-text-gradient" }],
    image: WhatsGenerativeAI,
  },
  {
    name: "Responsible use of Microsoft Foundry",
    description:
      "Foundational understanding in how to responsibly use Microsoft Foundry",
    Source: [{ name: "Microsoft", color: "pink-text-gradient" }],
    image: AIMicrosoft,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
};

/* eslint-disable react-refresh/only-export-components */
const Certifcations = () => {
  const [openCert, setOpenCert] = useState(null);

  useEffect(() => {
    if (!openCert) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenCert(null);
    };

    // Save previous inline styles (so we restore perfectly)
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // Compensate for scrollbar width to prevent “grid jump”
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [openCert]);

  return (
    <>
      <motion.div variants={textVariant()} className="!mt-20">
        <p className={`${styles.sectionSubText} !mb-1 text-center`}>Certs</p>
        <h2
          className={`${styles.sectionHeadText} text-gray-300 leading-tight text-center`}
        >
          Qualifications BABY.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="!mt-5 w-full text-white text-[17px] text-center !px-10"
      >
        Certifications, qualifications and credentials HEHEHEH
      </motion.p>

      {/* Cards grid (Projects-style) */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="!mt-10 flex flex-wrap gap-7 justify-center"
      >
        {Certifications.map((c, index) => (
          <CertificationsCard
            key={`${c.name}-${index}`}
            index={index}
            name={c.name}
            description={c.description}
            source={c.Source}
            image={c.image}
            onOpen={() => setOpenCert(c)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex items-center justify-center !px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpenCert(null)} // click outside closes
          >
            <motion.div
              className="
                w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0b0b14]
                overflow-hidden
            "
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onMouseDown={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Header bar (X is OUTSIDE the image) */}
              <div className="flex items-center justify-between !px-3 !py-2 border-b border-white/10 bg-white/[0.02]">
                <p className="text-white/90 font-semibold text-sm sm:text-base truncate pr-3">
                  {openCert.name}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenCert(null)}
                  className="
                        w-10 h-10 rounded-xl
                        bg-white/5 hover:bg-white/10
                        border border-white/10
                        flex items-center justify-center
                        text-white cursor-pointer
                        transition
                        focus:outline-none focus:ring-2 focus:ring-white/20
                    "
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="p-3 sm:p-4 flex items-center justify-center">
                <div className="w-full rounded-xl border border-white/10 bg-black/30 p-2 flex items-center justify-center">
                  <img
                    src={openCert.image}
                    alt={openCert.name}
                    className="
                        max-w-full w-auto h-auto object-contain
                        max-h-[calc(100vh-10rem)] sm:max-h-[calc(100vh-12rem)]
                    "
                    draggable="false"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifcations, "Certs");
