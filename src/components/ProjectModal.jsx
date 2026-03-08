import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 !px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d2342] border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between !px-6 !py-5 border-b border-white/10">
              <h3 className="text-white text-2xl font-bold">{project.name}</h3>
            </div>

            {/* Body */}
            <div className="!px-6 !py-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-xl object-cover border border-white/10"
              />

              {/* Technologies Used */}
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

              {/* Dynamic Sections from DB */}
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

              {/* Buttons */}
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

            {/* Footer */}
            <div className="flex justify-end !px-6 !py-5 border-t border-white/10">
              <button
                onClick={onClose}
                className="rounded-full bg-white/10 !px-6 !py-3 text-white font-medium hover:bg-white/15 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
