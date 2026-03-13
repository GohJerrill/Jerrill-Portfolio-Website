import React, { useEffect, useState, useCallback, useMemo } from "react";

const HeroTypewriter = () => {
  const toRotate = useMemo(
    () => [
      "Information Tech Student",
      "Troller At Heart",
      "Passionate Learner",
    ],
    [],
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

    if (isDeleting) setDelta((prev) => Math.max(35, prev / 1.6));

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
    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [tick, delta]);

  const gradientText =
    "bg-gradient-to-r from-[#915eff] via-sky-400 to-emerald-400 bg-clip-text text-transparent";

  return (
    <p
      className="text-white-100 mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1
                 text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-medium"
    >
      <span className="shrink-0">A</span>
      <span className={`min-w-0 break-words ${gradientText}`}>
        {text}
        <span className="inline-block w-2 ml-0.5 animate-pulse text-white">
          |
        </span>
      </span>
    </p>
  );
};

export default HeroTypewriter;
