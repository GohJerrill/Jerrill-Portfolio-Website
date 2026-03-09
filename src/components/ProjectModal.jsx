import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    // lock scroll (and prevent layout jump)
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex items-center justify-center !px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="
              w-full max-w-5xl rounded-2xl border border-white/10
              bg-[#1d2342] overflow-hidden
              shadow-2xl
            "
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="!px-5 sm:!px-6 !py-4 border-b border-white/10 bg-white/[0.02]">
              <h3 className="text-white font-extrabold text-[22px] sm:text-[28px] leading-tight">
                {project.name}
              </h3>
            </div>

            <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
              <div className="!px-5 sm:!px-6 !py-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-xl object-cover border border-white/10"
                  draggable="false"
                />

                {project.tags?.length > 0 && (
                  <div className="!mt-6">
                    <p className="text-sm tracking-[0.2em] uppercase text-[#8ea2ff] font-semibold">
                      Technologies Used
                    </p>
                    <div className="!mt-4 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className="rounded-full border border-white/15 bg-white/5 !px-7 !py-1 text-sm text-white/80"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.modalSections?.map((section, index) => {
                  const hasContent =
                    section.content && section.content.trim() !== "";
                  const hasItems =
                    Array.isArray(section.items) && section.items.length > 0;

                  if (!hasContent && !hasItems) return null;

                  return (
                    <div key={`${section.title}-${index}`} className="!mt-6">
                      <p className="text-sm tracking-[0.2em] uppercase text-[#8ea2ff] font-semibold">
                        {section.title}
                      </p>

                      {hasContent && (
                        <p className="!mt-3 text-white/80 text-[16px] leading-8">
                          {section.content}
                        </p>
                      )}

                      {hasItems && (
                        <ul className="!mt-4 space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-white/80 text-[16px] leading-7 flex gap-3"
                            >
                              <span className="!mt-2 h-2.5 w-2.5 rounded-full bg-[#8ea2ff] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                <div className="!mt-8 flex flex-wrap gap-4">
                  {project.source_code_link && (
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#915eff] !px-5 !py-3 text-white font-medium transition hover:opacity-90"
                    >
                      View GitHub
                    </a>
                  )}

                  {project.source_code_link_Backend && (
                    <a
                      href={project.source_code_link_Backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 !px-5 !py-3 text-white font-medium transition hover:bg-white/10"
                    >
                      Backend Github Link
                    </a>
                  )}

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 !px-5 !py-3 text-white font-medium transition hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Footer (main close button) */}
              <div className="flex justify-end !px-5 sm:!px-6 !py-5 border-t border-white/10 bg-white/[0.02]">
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/10 !px-6 !py-3 text-white font-medium hover:bg-white/15 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
