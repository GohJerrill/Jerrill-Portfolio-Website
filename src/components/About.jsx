import React from 'react';
import { motion } from 'framer-motion';

import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

import Resume from "../assets/resume.pdf";
import Testimonial from "../assets/testimonial.pdf";
import PortfolioImage from "../assets/protfolio image.png"

import { SectionWrapper } from "../hoc"

/* eslint-disable react-refresh/only-export-components */
const About = () => {

    const HandleResumeClick = () => window.open(Resume, "_blank");
    const HandleTestimonialClick = () => window.open(Testimonial, "_blank");

    return (
        <>
            <div className="mt-4 !px-5 lg:!px-25 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">

                {/* IMAGE FIRST on mobile, RIGHT column on desktop */}
                <motion.div
                    variants={fadeIn("left", "", 0.15, 1)}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end self-start lg:-translate-y-4"
                >
                    <motion.div
                        animate={{ y: [-7, 7, -7] }}
                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    >
                        <img
                            src={PortfolioImage}
                            alt="Portfolio"
                            className="w-[220px] sm:w-[280px] md:w-[280px] lg:w-[300px] object-contain"
                            draggable="false"
                        />
                    </motion.div>
                </motion.div>

                {/* TEXT SECOND on mobile, LEFT column on desktop */}
                <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.div variants={textVariant()} className="w-full">
                        <p className={`${styles.sectionSubText} !mb-1 text-center lg:text-left`}>Introduction</p>
                        <h2 className={`${styles.sectionHeadText} text-gray-300 !mt-0 leading-tight text-center lg:text-left`}>
                            Goh Jerrill.
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="!mt-3 text-secondary text-[17px] leading-[30px]
                       w-full max-w-[720px] mx-auto lg:mx-0
                       text-center lg:text-left"
                    >
                        I'm a year 2 Temasek Polytechnic student studying a Diploma in Information Techology.
                        I have a great passion in Full-Stack Web Development and application security. I love to explore
                        new technologies and have a strong foundation in React, App security and Cloud Computing. <br /> <br />
                        I am passionate to learn more in this ever changing field! During my free time I usually spent time
                        researching tech and also history HEHEHEH. Scroll and view more!
                    </motion.p>

                    <div className="!mt-5 flex flex-row justify-center lg:justify-start gap-4">
                        <button
                            onClick={HandleResumeClick}
                            className="
                font-poppins text-[15px] font-semibold tracking-[0.8px] text-white
                border-2 border-white/25 bg-transparent
                !px-5 !py-1 rounded-full
                transition-all duration-300
                hover:bg-[#915eff] hover:border-[#915eff]
                hover:-translate-y-[2px]
                hover:shadow-[0_0_18px_rgba(145,94,255,0.75),0_0_38px_rgba(145,94,255,0.45)]
                active:translate-y-0 cursor-pointer
              "
                        >
                            Resume
                        </button>

                        <button
                            onClick={HandleTestimonialClick}
                            className="
                font-poppins text-[15px] font-semibold tracking-[0.8px] text-white
                border-2 border-white/25 bg-transparent
                !px-5 !py-1 rounded-full
                transition-all duration-300
                hover:bg-[#915eff] hover:border-[#915eff]
                hover:-translate-y-[2px]
                hover:shadow-[0_0_18px_rgba(145,94,255,0.75),0_0_38px_rgba(145,94,255,0.45)]
                active:translate-y-0 cursor-pointer
              "
                        >
                            Testimonials
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(About, "About")
