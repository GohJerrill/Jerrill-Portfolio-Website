import React, { useEffect, useState, useCallback, useMemo } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
    // 1) Memoize so it doesn't become a "new array" every render
    const toRotate = useMemo(
        () => ["Information Tech Student", "Troller At Heart", "Passionate Learner"],
        []
    );

    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(120);
    const period = 900;

    const tick = useCallback(() => {
        const i = loopNumber % toRotate.length;
        const fullText = toRotate[i];

        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // speed control (with clamp so it never becomes too tiny)
        if (isDeleting) setDelta((prev) => Math.max(35, prev / 1.6));

        // switch typing/deleting states
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNumber((prev) => prev + 1);
            setDelta(120);
        }
    }, [loopNumber, isDeleting, text, toRotate]);

    useEffect(() => {
        const ticker = setInterval(tick, delta);
        return () => clearInterval(ticker);
    }, [tick, delta]);

    const gradientText =
        "bg-gradient-to-r from-[#915eff] via-sky-400 to-emerald-400 bg-clip-text text-transparent";

    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-x-0 top-24 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Whats Up, I'm{" "}
                        <span className="text-[#915eff] font-iceland">Jerrill</span>

                    </h1>

                    <p className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap items-baseline gap-x-2 gap-y-1`}>
                        <span className="shrink-0">A</span>

                        <span className={`min-w-0 break-words ${gradientText}`}>
                            {text}
                            <span className="inline-block w-2 ml-0.5 animate-pulse text-white">|</span>
                        </span>
                    </p>

                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute !bottom-20 sm:bottom-4 w-full flex justify-center items-center z-20 pointer-events-auto">

                <a href="#About">
                    <div className="w-[25px] h-[54px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2 bg-black/20 backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className="w-3 h-3 rounded-full bg-white/70 mb-1"
                        />
                    </div>
                </a>
            </div>




        </section>
    );
};

export default Hero;
